import cl from 'classnames';
import React from 'react';

interface ISvgLogoProps {
  mainColor?: string;
  aditionalColor?: string;
  className?: string;
}

export const SvgLogo: React.FC<ISvgLogoProps> = ({
  mainColor = '#14A76C',
  aditionalColor = '#FF672E',
  className,
}) => {
  return (
    <svg
      className={cl(className)}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.3081 48.6018C10.4631 48.6018 3.34263 28.6908 6.50763 22.6308C7.78413 20.1863 10.1131 22.4993 13.7896 19.5388C15.6141 18.0693 15.1736 15.5088 15.1766 13.5553C15.1786 12.3828 16.5536 11.5363 17.7376 11.7553C19.0596 11.9998 20.3921 12.8783 22.5281 12.6273C25.0481 12.3313 26.6611 10.5268 29.1541 10.9923C31.2236 11.3783 29.8326 16.2763 36.9746 17.4498C39.3781 17.8448 37.8661 21.7238 39.6496 23.8133C41.1476 25.5683 43.0826 24.3738 44.3831 26.0943C45.9306 28.1418 44.1591 30.4363 43.4931 34.7513C41.8191 45.5943 35.4826 48.6018 24.3081 48.6018Z"
        fill={aditionalColor}
      />
      <path
        d="M9.9629 8.65247C8.1659 8.84147 6.0599 11.628 5.5069 14.354C4.9539 17.08 6.6559 19.1775 8.2684 18.865C9.8809 18.5525 12.7144 16.517 13.1784 14.2405C13.8659 10.8675 12.0574 8.43247 9.9629 8.65247Z"
        fill={mainColor}
      />
      <path
        d="M14.8865 7.49819C15.716 9.74969 20.128 9.66869 22.639 9.28469C25.15 8.90069 28.391 7.55869 28.5775 5.49469C28.764 3.43069 25.327 1.26069 21.375 1.92169C17.423 2.58269 14.057 5.24669 14.8865 7.49819Z"
        fill={mainColor}
      />
      <path
        d="M39.11 14.7665C37.3075 15.3645 35.958 14.913 33.277 12.365C30.596 9.817 30.8865 6.6645 32.419 4.9885C33.9515 3.3125 37.222 5.0985 38.7095 7.2185C40.197 9.3385 40.9125 14.1685 39.11 14.7665Z"
        fill={mainColor}
      />
      <path
        d="M43.3395 23.1657C41.6715 23.0517 40.4635 21.9317 39.798 20.3222C39.1325 18.7127 38.89 16.6392 40.4925 15.6817C42.095 14.7242 43.6965 17.3332 44.2375 19.0852C44.7785 20.8372 45.0075 23.2797 43.3395 23.1657Z"
        fill={mainColor}
      />
      <path
        d="M24.8002 26.2003C24.3397 28.7618 24.7927 29.2303 25.9317 29.6173C26.0392 29.6618 26.1062 29.6738 26.2577 29.6313C27.6197 28.0758 27.2382 27.4018 26.6872 26.1778C26.6197 25.9743 26.6432 25.8948 26.6992 25.7603C27.1272 24.7508 27.3562 24.1718 27.2212 22.5088C27.2022 22.3548 27.2047 22.2668 27.2757 22.1003C28.0332 20.3208 27.8327 19.5528 25.5722 18.8828C23.4927 18.9383 23.5192 22.2868 24.7597 25.7358C24.8237 25.9138 24.8322 26.0168 24.8002 26.2003Z"
        fill="white"
      />
      <path
        d="M38.5897 29.1687C38.5767 28.7282 38.4947 28.5602 38.2417 28.3737C37.5117 28.0207 37.0122 27.6442 36.2722 27.9227C35.1502 28.3442 34.7602 29.0647 35.4727 30.9602C34.5702 31.3167 34.4022 31.6952 34.6942 32.6872C33.9907 33.0472 33.6582 33.3277 33.2067 34.0092C33.0827 34.1287 32.9802 34.1602 32.7557 34.1337C31.7057 33.4582 31.1222 33.0537 30.1767 31.8827C30.0202 31.6447 29.9937 31.5067 29.9542 31.2602C30.9342 30.3902 31.3482 29.7952 31.0072 27.8832C31.1047 27.3847 31.2702 27.1767 31.5307 26.7237C31.8842 25.8197 31.9912 25.2407 32.0062 24.0652C32.1002 23.6062 32.1697 23.3487 32.3642 22.8892C32.3982 22.3197 32.3582 22.0172 31.9417 21.5762C31.6677 21.2732 31.4222 21.1317 30.7522 20.9512C30.2182 21.0207 29.9467 21.1427 29.4962 21.4632C29.0952 21.9432 29.0682 22.3637 29.3482 23.3682C29.1322 24.4932 29.0732 25.2287 29.6892 27.7697C28.8717 28.7492 28.6387 29.3022 29.3412 30.9937C29.4972 31.5927 27.3057 30.8297 26.4782 30.4367C26.1422 30.4712 25.9847 30.5372 25.7472 30.7212C25.1482 30.6502 24.8272 30.4557 24.1952 30.7142C23.5427 30.5417 23.1762 30.5492 22.5227 30.5537C22.4862 30.5082 22.4792 30.4667 22.4777 30.3797C22.9497 29.6217 23.2427 29.2257 22.4677 27.1717C22.6827 26.2452 22.6377 25.7312 22.1792 24.8277C22.1662 24.5832 22.1567 24.4457 22.0082 24.1707C22.3347 22.7962 22.1912 21.7467 21.0032 21.5477C20.0352 20.6132 18.2482 20.9402 19.0222 24.1447C19.0612 24.1587 19.5122 26.5187 19.8507 26.9407C20.1892 27.3627 20.4462 27.7282 20.3837 28.3682C20.4487 29.6347 20.5972 30.6062 21.6967 30.7822C21.7977 30.8607 21.8297 30.9147 21.8237 31.0372C21.8237 31.0372 20.5447 31.8457 21.2897 33.8567C21.0272 35.4002 19.5517 36.3042 19.0847 35.7492C18.5482 35.0307 18.4642 34.1387 17.9427 33.6817C17.4317 31.5647 15.1302 30.9977 14.4667 31.6982C14.4667 31.6982 14.2327 31.8042 14.5417 32.5272C15.2272 33.7677 15.4162 34.3027 16.2182 35.2552C16.8762 36.0362 17.4962 36.1042 18.1292 37.0277C18.0542 37.3652 18.0477 37.5917 18.1177 38.0667C18.6362 39.7417 19.1022 40.6082 19.7557 42.1932C20.1152 42.7632 20.3442 42.9897 20.7742 43.3212C20.7742 43.3212 21.9297 43.8937 23.0082 43.7827C24.0867 43.6717 24.5062 42.4997 24.5062 42.4997C24.9512 41.8252 25.1732 41.4442 25.3782 40.7472C25.6922 39.5127 25.7212 38.8312 25.0592 37.6657C25.1067 36.5337 25.4722 35.7177 26.8832 36.7072C27.7932 36.8437 28.1027 37.4282 28.2907 39.4057C27.9217 40.7957 27.9522 41.5862 28.0997 43.0007C28.3932 43.7707 28.7312 43.9562 29.6327 43.8627C30.9427 42.6312 34.2212 36.9197 33.7537 35.4137C34.0882 35.3427 34.2772 35.2772 34.6162 35.0932C37.2057 33.0312 41.0567 30.3737 38.5897 29.1687Z"
        fill="white"
      />
    </svg>
  );
};