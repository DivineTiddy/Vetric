

const CrossChain = () => {
  return (
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bi_2016_2751)">
          <g clipPath="url(#clip0_2016_2751)">
            <rect
              x="0.5"
              y="0.450195"
              width="30"
              height="30"
              rx="5"
              fill="white"
              fillOpacity="0.1"
            />
            <g filter="url(#filter1_d_2016_2751)">
              <path
                d="M21.3419 8.14755H9.65768C9.34779 8.14755 9.0506 8.27065 8.83148 8.48977C8.61236 8.7089 8.48926 9.00609 8.48926 9.31597V13.4054C8.48926 17.2554 10.3529 19.5886 11.9164 20.868C13.6004 22.2453 15.2756 22.7134 15.3486 22.7324C15.449 22.7597 15.5549 22.7597 15.6553 22.7324C15.7284 22.7134 17.4014 22.2453 19.0876 20.868C20.6467 19.5886 22.5103 17.2554 22.5103 13.4054V9.31597C22.5103 9.00609 22.3872 8.7089 22.1681 8.48977C21.949 8.27065 21.6518 8.14755 21.3419 8.14755ZM15.4998 21.5566C14.4666 21.1959 13.5047 20.6568 12.6576 19.9639C10.9597 18.575 9.9768 16.7647 9.7234 14.5739H15.4998V9.31597H21.3419V13.4054C21.3421 13.7958 21.3202 14.1859 21.2762 14.5739H15.4998V21.5566Z"
                fill="#96EA63"
              />
            </g>
            <g opacity="0.4" filter="url(#filter2_f_2016_2751)">
              <ellipse
                cx="15.5105"
                cy="31.1526"
                rx="19.032"
                ry="8.80591"
                fill="#96EA63"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_bi_2016_2751"
            x="-1.5"
            y="-1.5498"
            width="34"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2016_2751"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_2016_2751"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="32"
              operator="erode"
              in="SourceAlpha"
              result="effect2_innerShadow_2016_2751"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_2016_2751"
            />
          </filter>
          <filter
            id="filter1_d_2016_2751"
            x="6.58526"
            y="2.43555"
            width="21.6375"
            height="22.2213"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1.904" dy="-1.904" />
            <feGaussianBlur stdDeviation="1.904" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.654902 0 0 0 0 0.941176 0 0 0 0 0.458824 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2016_2751"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2016_2751"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_f_2016_2751"
            x="-22.9863"
            y="2.8819"
            width="76.994"
            height="56.5414"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="9.73239"
              result="effect1_foregroundBlur_2016_2751"
            />
          </filter>
          <clipPath id="clip0_2016_2751">
            <rect
              x="0.5"
              y="0.450195"
              width="30"
              height="30"
              rx="5"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
  );
};

export default CrossChain;
