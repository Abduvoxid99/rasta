import useTranslation from "next-translate/useTranslation";
import { Button } from "../Button";
import { useRouter } from "next/router";

export function PartnerBanner() {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div className="courier-banner-bg flex items-center">
      <div className="container">
        <div className="flex bg-white  sm:max-w-[540px] rounded-[24px] p-[18px] sm:p-[40px] flex-col">
          <p className="text-[18px] leading-[24px] sm:text-[32px] font-bold sm:leading-[42px] mb-[20px] text-center sm:text-left">
            {t("join_delivery_partner")}
          </p>
          <p className="hidden text-[18px] leading-[26px] mb-[32px] sm:block">
            {t("become_delivery_partner")}
          </p>
          <div onClick={() => router.push("/courier")}>
            <Button>{t("connect")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
