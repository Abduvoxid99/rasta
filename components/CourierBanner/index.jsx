import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Button";
import Gallery from "../Gallary/Gallary";
import InputMask from "react-input-mask";
import useTranslation from "next-translate/useTranslation";

export function CourierBanner() {
  const [courierType, setCourierType] = useState({});
  const [courierVehicle, setCourierVehicle] = useState({});
  const [region, setRegion] = useState({});
  const [vehicleClass, setVehicleClass] = useState({});
  const [response, setResponse] = useState("");
  const { t, lang } = useTranslation("common");
  const [img, setImg] = useState("");
  const colors = [
    {
      value: "red",
      label: t("red"),
    },
    {
      value: "green",
      label: t("green"),
    },
    {
      value: "white",
      label: t("white"),
    },
    {
      value: "black",
      label: t("black"),
    },
    {
      value: "blue",
      label: t("blue"),
    },
    {
      value: "grey",
      label: t("grey"),
    },
  ];
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    region_id: "",
    is_active: false,
    is_free: false,
    courier_type_id: "",
  });
  const [carInfo, setCarInfo] = useState({
    car_brand: "",
    car_class: "",
    car_colour: colors[0]?.value,
    courier_id: response ? response : "",
    is_active: true,
    model: "",
    picture: img ? img : "",
    vehicle_number: "",
  });

  const [imgUrl, setImgUrl] = useState("");

  const onFileDrag = (files) => {
    console.log(files);
    const formData = new FormData();
    formData.append("file", files.target.files[0]);
    axios
      .post("https://shipper.api.rasta.app/v1/upload", formData)
      .then((res) => {
        console.log(res);
        setImgUrl("https://cdn.rasta.app/rasta/" + res.data.filename);
        setImg(res.data.filename);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("dm");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://shipper.api.rasta.app/v1/couriers", {
        ...form,
        phone: form.phone.replace(/ /g, ""),
      })
      .then((res) => {
        setResponse(res.data.id);
        secondSubmit(res.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const secondSubmit = (id) => {
    axios
      .post(`https://shipper.api.rasta.app/v1/courier-vehicle/${id}`, {
        ...carInfo,
        courier_id: id,
        picture: img,
      })
      .then((res) => {
        toast.success("Успешно завершено", {
          className: "bg-green-500 text-white",
          closeOnClick: true,
          ideProgressBar: false,
          autoClose: 4000,
        });
        setForm({
          first_name: "",
          last_name: "",
          phone: "",
          region_id: "",
          is_active: false,
          is_free: false,
          courier_type_id: "",
        });
        setCarInfo({
          car_brand: "",
          car_class: "",
          car_colour: colors[0]?.value,
          courier_id: response ? response : "",
          is_active: true,
          model: "",
          picture: img ? img : "",
          vehicle_number: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRegions = () => {
    axios
      .get("https://shipper.api.rasta.app/v1/region?limit=1000", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTMyMTg3MDksImlhdCI6MTY1MTkyMjcwOSwiaXNzIjoidXNlciIsInNoaXBwZXJfaWQiOiJhMzM2MWYxNi0zMDc2LTRkNTAtODNiZC0zOGNjOWRlZGU5OTQiLCJzdWIiOiI4OTk4ODZmYS0yMTA1LTQ0NTItYTg3My01ZDJhNGE2NjVmZDQiLCJ1c2VyX3JvbGVfaWQiOiI4OTBkODdiMC1kMmI5LTQyMjMtYWE4OS0zN2Y2MjA2YWFhNjYiLCJ1c2VyX3R5cGVfaWQiOiIyYTFlZmQ0YS1kNTI3LTRjYzItYWRmYS1hNzU0NjAyMWYwZjYifQ.MZVts36wed1DtcHSU49iQDV-wYMhVqlbLYfrXj_u1Bo",
        },
      })
      .then((res) => {
        setRegion(res.data);
        setForm((prev) => ({ ...prev, region_id: res.data?.regions[0]?.id }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getVehicleClass = () => {
    axios
      .get("https://shipper.api.rasta.app/v1/courier-vehicle-class", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTMyMTg3MDksImlhdCI6MTY1MTkyMjcwOSwiaXNzIjoidXNlciIsInNoaXBwZXJfaWQiOiJhMzM2MWYxNi0zMDc2LTRkNTAtODNiZC0zOGNjOWRlZGU5OTQiLCJzdWIiOiI4OTk4ODZmYS0yMTA1LTQ0NTItYTg3My01ZDJhNGE2NjVmZDQiLCJ1c2VyX3JvbGVfaWQiOiI4OTBkODdiMC1kMmI5LTQyMjMtYWE4OS0zN2Y2MjA2YWFhNjYiLCJ1c2VyX3R5cGVfaWQiOiIyYTFlZmQ0YS1kNTI3LTRjYzItYWRmYS1hNzU0NjAyMWYwZjYifQ.MZVts36wed1DtcHSU49iQDV-wYMhVqlbLYfrXj_u1Bo",
        },
      })
      .then((res) => {
        setVehicleClass(res.data);
        setCarInfo((prev) => ({
          ...prev,
          car_class: res.data?.vehicle_classes[0]?.id,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCourierType = () => {
    axios
      .get("https://shipper.api.rasta.app/v1/courier_type?limit=1000", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTMyMTg3MDksImlhdCI6MTY1MTkyMjcwOSwiaXNzIjoidXNlciIsInNoaXBwZXJfaWQiOiJhMzM2MWYxNi0zMDc2LTRkNTAtODNiZC0zOGNjOWRlZGU5OTQiLCJzdWIiOiI4OTk4ODZmYS0yMTA1LTQ0NTItYTg3My01ZDJhNGE2NjVmZDQiLCJ1c2VyX3JvbGVfaWQiOiI4OTBkODdiMC1kMmI5LTQyMjMtYWE4OS0zN2Y2MjA2YWFhNjYiLCJ1c2VyX3R5cGVfaWQiOiIyYTFlZmQ0YS1kNTI3LTRjYzItYWRmYS1hNzU0NjAyMWYwZjYifQ.MZVts36wed1DtcHSU49iQDV-wYMhVqlbLYfrXj_u1Bo",
        },
      })
      .then((res) => {
        setCourierType(res.data);
        setForm((prev) => ({
          ...prev,
          courier_type_id: res.data?.courier_type[0]?.id,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRegions();
    // getCoureerVehicle();
    getCourierType();
    getVehicleClass();
  }, []);

  return (
    <div className="sm:h-[800px] bg-[#F6F8F9] flex items-center">
      <div className="container grid grid-cols-12 items-center">
        <div className="py-4 sm:p-0 col-span-12 sm:col-span-8">
          <div className="p-4 sm:p-[32px] bg-white rounded-[24px] grid grid-cols-12 items-center gap-4">
            <div className="col-span-6 mr-[20px]">
              <p className="text-[24px] font-semibold mb-[32px]">
                {t("join_courier")}
              </p>
            </div>
            <div className="col-span-6">
              <div>
                <label>{t("image")}</label>
                {/* <input
                  onChange={onFileDrag}
                  type="file"
                  id="file"
                  name="file"
                /> */}
                {/* <img src={imgUrl} alt="img" /> */}
                <Gallery />
              </div>
            </div>
            <div className="col-span-6">
              <div className="mb-[20px]">
                <label>{t("name")}</label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  value={form.first_name}
                />
              </div>
              <div className="mb-[20px]">
                <label>{t("full_name")}</label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  value={form.last_name}
                />
              </div>
              <div className="mb-[20px]">
                <label>{t("phone_number")}</label>
                <InputMask
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Telefon raqam"
                  mask="+\9\98 99 999 99 99"
                  maskChar={null}
                  value={form.phone}
                />
              </div>
              <div className="mb-[20px]">
                <label>{t("region")}</label>
                <div className="select">
                  <select
                    onChange={(e) =>
                      setForm({ ...form, region_id: e.target.value })
                    }
                  >
                    {region?.regions?.map((item) => (
                      <option key={item.id} value={form?.region_id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label>{t("courier_type")}</label>
                <div className="select">
                  <select
                    onChange={(e) =>
                      setForm({ ...form, courier_type_id: e.target.value })
                    }
                  >
                    {courierType?.courier_type?.map((item) => (
                      <option key={item.id} value={form?.courier_type_id}>
                        {item.name === "Basic courier" ? "Oddiy kuryer" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="mb-[20px]">
                <label>{t("vehicle_number")}</label>
                <input
                  onChange={(e) =>
                    setCarInfo({ ...carInfo, vehicle_number: e.target.value })
                  }
                  value={carInfo.vehicle_number}
                />
              </div>
              <div className="mb-[20px]">
                <label>{t("vehicle_brand")}</label>
                <input
                  onChange={(e) =>
                    setCarInfo({ ...carInfo, car_brand: e.target.value })
                  }
                  value={carInfo.car_brand}
                />
              </div>
              <div className="mb-[20px]">
                <label>{t("model")}</label>
                <input
                  onChange={(e) =>
                    setCarInfo({ ...carInfo, model: e.target.value })
                  }
                  value={carInfo.model}
                />
              </div>
              <div className="mb-[20px]">
                <label>{t("type")}</label>
                <div className="select">
                  <select
                    onChange={(e) =>
                      setCarInfo({ ...carInfo, car_class: e.target.value })
                    }
                  >
                    {vehicleClass?.vehicle_classes?.map((item) => (
                      <option key={item.id} value={carInfo?.car_class}>
                        {item.class && item.class[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label>{t("vehicle_color")}</label>
                <div className="select">
                  <select
                    onChange={(e) =>
                      setCarInfo({ ...carInfo, car_colour: e.target.value })
                    }
                  >
                    {colors.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <Button click={onSubmit}>{t("send")}</Button>
          </div>
        </div>
        <div className="hidden sm:block sm:col-span-4">
          <div className="w-full h-full pl-[100px] flex items-center">
            <img
              src="/images/bag-rasta.png"
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
