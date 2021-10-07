import { FC } from "react";

interface IconProps {
  width?: string;
  height?: string;
  name?:
    | "arrowDown"
    | "arrowUp"
    | "settings"
    | "moreHorizontal"
    | "refreshCw"
    | "sortStyle1"
    | "filter"
    | "campaignBrand"
    | "campaignBrandDark"
    | "dragNDrop"
    | "sortStyle2"
    | "externalLink"
    | "pathRight"
    | "search"
    | "plus"
    | "link"
    | "arrowUpRight"
    | "cross"
    | "chevronDown"
    | "eye"
    | "chart"
    | "database"
    | "shuffle"
    | "minimize2"
    | "maximize2"
    | "trash"
    | "trash2"
    | "pathDrillDown";
}
const Icon: FC<IconProps> = ({ name, width = "24", height = "24" }) => {
  let icons = {
    arrowDown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.75 5a.88.88 0 01.88.88v11.74a.88.88 0 11-1.76 0V5.88a.88.88 0 01.88-.88z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.258 11.127a.88.88 0 011.245 0l5.247 5.248 5.247-5.248a.88.88 0 011.245 1.246l-5.87 5.87a.88.88 0 01-1.245 0l-5.87-5.87a.88.88 0 010-1.245z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    arrowUp: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.75 18.5a.88.88 0 01-.88-.88V5.88a.88.88 0 111.76 0v11.74a.88.88 0 01-.88.88z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.242 12.373a.88.88 0 01-1.245 0L11.75 7.125l-5.247 5.248a.88.88 0 01-1.245-1.246l5.87-5.87a.88.88 0 011.245 0l5.87 5.87a.88.88 0 010 1.245z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    settings: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a1.998 1.998 0 010 2.83 1.998 1.998 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a1.998 1.998 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 013.417 1.415 2 2 0 01-.587 1.415l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1v0z"
        ></path>
      </svg>
    ),
    moreHorizontal: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 13.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM19 13.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM5 13.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
        ></path>
      </svg>
    ),
    refreshCw: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#484964"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M16.763 4.814v3.89h-3.89M2.5 15.187v-3.89h3.89"
        ></path>
        <path
          stroke="#484964"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M4.127 8.055a5.835 5.835 0 019.628-2.178l3.008 2.826M2.5 11.297l3.008 2.826a5.835 5.835 0 009.628-2.178"
        ></path>
      </svg>
    ),
    sortStyle1: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M5.121 9.828L7.95 7l2.828 2.828M7.95 7v9.9m10.728-1.829L15.85 17.9l-2.83-2.83M15.85 8v9.9"
        ></path>
      </svg>
    ),
    filter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M18.333 6H5l5.333 6.307v4.36L13 18v-5.693L18.333 6z"
        ></path>
      </svg>
    ),
    campaignBrand: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <g clipPath="url(#a)">
          <path fill="#EEEEF2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          <g filter="url(#b)">
            <circle cx="12" cy="12" r="3" fill="#808192"></circle>
          </g>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            d="M13 13l7.5 7.5"
          ></path>
          <path
            fill="currentColor"
            stroke="currentColor"
            d="M14.219 17.074l-1.428-4.283 4.283 1.428-2.856 2.855z"
          ></path>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z"></path>
          </clipPath>
          <filter
            id="b"
            width="46"
            height="46"
            x="-11"
            y="-1"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="10"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    campaignBrandDark: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <g clipPath="url(#a)">
          <path
            fill="#808192"
            fillOpacity="0.5"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
          <g filter="url(#b)">
            <circle cx="12" cy="12" r="3" fill="#F9F9FC"></circle>
          </g>
          <path
            stroke="#484964"
            strokeLinecap="round"
            d="M13 13l7.5 7.5"
          ></path>
          <path
            fill="#484964"
            stroke="#484964"
            d="M14.219 17.074l-1.428-4.283 4.283 1.428-2.856 2.855z"
          ></path>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z"></path>
          </clipPath>
          <filter
            id="b"
            width="46"
            height="46"
            x="-11"
            y="-1"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="10"></feOffset>
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0.05 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    ),
    dragNDrop: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height={height}
        fill="currentColor"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 11a1 1 0 110-2 1 1 0 010 2zm-4 4a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm4 2a1 1 0 110 2 1 1 0 010-2z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    sortStyle2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.375 11c-.21 0-.375-.132-.375-.3 0-.078.037-.144.098-.198l2.624-2.4A.418.418 0 0112 8c.113 0 .21.042.277.102l2.626 2.4c.06.054.097.12.097.198 0 .168-.165.3-.375.3h-5.25zm5.25 2c.21 0 .375.132.375.3a.264.264 0 01-.098.198l-2.624 2.4A.418.418 0 0112 16a.418.418 0 01-.277-.102l-2.626-2.4A.264.264 0 019 13.3c0-.168.165-.3.375-.3h5.25z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    externalLink: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M16 12.667v4A1.334 1.334 0 0114.667 18H7.333A1.333 1.333 0 016 16.667V9.334A1.333 1.333 0 017.333 8h4M14 6h4v4m-7.333 3.333L18 6"
        ></path>
      </svg>
    ),
    pathRight: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 15l3-3-3-3"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.3"
          d="M18.91 12l-5.103-.1a7 7 0 01-4.723-1.96L5 6m4 8l-4 4"
        ></path>
      </svg>
    ),
    search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.333 16.667a5.333 5.333 0 100-10.667 5.333 5.333 0 000 10.667zM18 18l-2.233-2.233"
        ></path>
      </svg>
    ),
    plus: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.944 6.694a.694.694 0 10-1.388 0v4.862H6.694a.694.694 0 100 1.388h4.862v4.862a.694.694 0 001.388 0v-4.862h4.862a.694.694 0 000-1.388h-4.862V6.694z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    link: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#484964"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M7.745 10.91a2.11 2.11 0 01-1.909-.583l-2.2-2.272a3.1 3.1 0 010-4.419v0a3.1 3.1 0 014.419 0l2.236 2.237a2.09 2.09 0 01.618 1.836m-3.636-.436l5.454 5.454-5.454-5.454zm4.909 1.818a2.182 2.182 0 011.909.618L16.364 12a3.1 3.1 0 010 4.364 3.1 3.1 0 01-4.373 0L9.727 14.09a2.164 2.164 0 01-.636-1.882l3.09-3.118z"
        ></path>
      </svg>
    ),
    arrowUpRight: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#484964"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M14.545 15.454v-10h-10m0 10l10-10-10 10z"
        ></path>
      </svg>
    ),
    cross: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.91 6.174a.6.6 0 00-.848-.848l-5.444 5.444-5.444-5.444a.6.6 0 00-.848.848l5.444 5.444-5.444 5.444a.6.6 0 00.848.848l5.444-5.443 5.444 5.443a.6.6 0 10.848-.848l-5.443-5.444 5.443-5.444z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    chevronDown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M12 7.5l-3.182 3.182L5.636 7.5"
        ></path>
      </svg>
    ),
    eye: (
      <svg
        width={width}
        height={height}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    chart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 12.059h3.443L9.456 5l5.165 15 2.583-7.5h3.443"
        ></path>
      </svg>
    ),
    database: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.2 10.2c3.977 0 7.2-1.612 7.2-3.6S16.177 3 12.2 3C8.224 3 5 4.612 5 6.6s3.224 3.6 7.2 3.6z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.4 6.6v10.8c0 1.991-3.229 3.6-7.2 3.6S5 19.39 5 17.4V6.6"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.4 10.2c0 1.991-3.229 3.6-7.2 3.6S5 12.191 5 10.2m14.4 3.6c0 1.991-3.229 3.6-7.2 3.6S5 15.79 5 13.8"
        ></path>
      </svg>
    ),
    shuffle: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.946 9.883L20 6.94 16.946 4"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 17.06h.733c1.923 0 4.071-1.785 5.15-4.04.325-.687 3.684-6.079 7.226-6.079h1.974m-2.136 7.176L20 17.06 16.947 20"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 6.94h.733c1.923 0 4.071 1.785 5.15 4.04.325.686 3.684 6.078 7.226 6.078h1.974"
        ></path>
      </svg>
    ),
    minimize2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 14h4v4m8-8h-4V6m0 4l7-7M3 21l7-7"
        ></path>
      </svg>
    ),
    maximize2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.333 5H19v4.667M9.667 19H5v-4.667M19 5l-4.667 4.667M5 19l4.667-4.667"
        ></path>
      </svg>
    ),
    trash: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          fill="#808192"
          fillRule="evenodd"
          d="M10.44 5.94a.65.65 0 01.46-.19h2.8a.65.65 0 01.65.65v.65h-4.1V6.4a.65.65 0 01.19-.46zM8.75 7.05V6.4a2.15 2.15 0 012.15-2.15h2.8a2.15 2.15 0 012.15 2.15v.65h2.75a.75.75 0 010 1.5h-.723l-.928 9.092a2.15 2.15 0 01-2.15 2.108h-5a2.15 2.15 0 01-2.149-2.108L6.722 8.55H6a.75.75 0 010-1.5h2.75zm.75 1.5h6.87l-.917 8.974a.774.774 0 00-.003.076.65.65 0 01-.65.65h-5a.65.65 0 01-.65-.65.747.747 0 00-.004-.076L8.23 8.55H9.5z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    trash2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          fill="#808192"
          fillRule="evenodd"
          d="M9.215 4.703c.226-.226.533-.353.852-.353h3.61a1.205 1.205 0 011.205 1.205V6.76h-6.02V5.555c0-.32.127-.626.353-.852zm6.867.852V6.76h3.912a.6.6 0 110 1.2h-1.249l-.858 11.157a2.405 2.405 0 01-2.405 2.38h-7.22a2.405 2.405 0 01-2.404-2.38L4.999 7.96H3.75a.6.6 0 010-1.2h3.912V5.555a2.405 2.405 0 012.405-2.405h3.61a2.405 2.405 0 012.405 2.405zM6.202 7.96l.854 11.086.001.046a1.205 1.205 0 001.205 1.205h7.22a1.205 1.205 0 001.207-1.251L17.54 7.96H6.204z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    pathDrillDown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 16l3 3 3-3"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.3"
          d="M12 18.91l.1-5.103a7 7 0 011.96-4.723L18 5m-8 4L6 5"
        ></path>
      </svg>
    ),
  };

  return name !== undefined ? icons[name] : null;
};

export default Icon;

// default fill #808192
