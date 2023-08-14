import Script from 'next/script';

export const VkPixel = ({ id = 'VK-RTRG-1621675-64vfa' }: { id?: string }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://vk.com/js/api/openapi.js?169"
        onLoad={() => {
          VK.Retargeting.Init(id), VK.Retargeting.Hit();
        }}
      />
      <noscript>
        <div>
          {/*eslint-disable-next-line*/}
          <img
            src={`https://vk.com/rtrg?p=${id}`}
            style={{ position: 'fixed', left: '-999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
