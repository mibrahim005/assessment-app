const MainBanner = ({ items }) => {
  const mainBannerItem = items.find(item => item.type === "banner");
  return (
    <div className="group aspect-w-1 aspect-h-1 h-16 overflow-hidden rounded-lg relative">
      <img
        src={mainBannerItem ? mainBannerItem.image : ""}
        alt={mainBannerItem ? mainBannerItem.description : "Banner Image"}
        className="object-cover object-center group-hover:opacity-75"
      />
      <div className="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0 p-2" />
      <div className="flex items-end p-6 absolute inset-0">
        <div className="mb-10">
          <h3 className="font-bold italic text-[34px] text-white uppercase">
            <a href={mainBannerItem.link ? mainBannerItem.link : ""}>
              <span className="absolute inset-0" />
              {mainBannerItem ? mainBannerItem.title : "No Title Found"}
            </a>
          </h3>
          <p className="mt-1 text-sm text-white uppercase">{mainBannerItem ? mainBannerItem.description : "No Description Found"}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
