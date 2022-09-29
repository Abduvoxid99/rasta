import useTranslation from "next-translate/useTranslation";

export function Banner() {
  const { t } = useTranslation("common");
  return (
    <div className="banner-bg flex items-center">
      <div className="container flex justify-center flex-col">
        <div className="max-w-[530px]">
          <h1 className="text-[20px] leading-[26px] sm:text-[48px] font-bold mb-[10px] sm:mb-[24px] sm:leading-[57px]">
            {t("fast_food_delivery")}
          </h1>
          <div className="mb-[32px] text-[14px] leading-[17px] sm:mb-[48px] sm:text-[22px] sm:leading-[28px]">
            {t("download_app")}
          </div>
          <div className="flex gap-[16px]">
            <a
              href="https://apps.apple.com/uz/app/rasta-girgitton/id1447948807"
              target="_blank"
            >
              <img
                src="/images/app-store.png"
                alt="app store"
                className="h-[35px] sm:h-[56px]"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.girgitton.user"
              target="_blank"
            >
              <img
                src="/images/google-play.png"
                alt="google play"
                className="h-[35px] sm:h-[56px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
