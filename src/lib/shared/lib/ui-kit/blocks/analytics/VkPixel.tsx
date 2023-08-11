export const VkPixel = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1621675-64vfa"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
          `,
        }}
      />
      <noscript>
        <div>
          {/*eslint-disable-next-line*/}
          <img
            src="https://vk.com/rtrg?p=VK-RTRG-1621675-64vfa"
            style={{ position: 'fixed', left: '-999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
