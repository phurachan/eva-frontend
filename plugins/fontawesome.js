import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faSquare } from "@fortawesome/free-regular-svg-icons";

import {
  faTwitterSquare,
  faTwitch,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  faRoad,
  faChartPie,
  faClone,
  faCloudSunRain,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faCalendar,
  faUser,
  faLocationDot,
  faCircleDot,
  faEdit,
  faMap,
  faUpload,
  faCloudUploadAlt,
  faCloudSun,
  faChartArea,
  faCameraRetro,
  faCar,
  faCarSide,
  faCamera,
  faMapMarkerAlt,
  faXmark,
  faMagnifyingGlass,
  faUsers,
  faCircleUser,
  faTrash,
  faUserPlus,
  faCircleCheck,
  faPlus,
  faGrip,
  faDisplay,
  faSquare as faSquareSolid
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTwitterSquare,
  faTwitch,
  faGithubSquare,
  faRoad,
  faChartPie,
  faClone,
  faCloudSunRain,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faCalendar,
  faUser,
  faLocationDot,
  faCircleDot,
  faEdit,
  faMap,
  faUpload,
  faCloudUploadAlt,
  faCloudSun,
  faChartArea,
  faCameraRetro,
  faCar,
  faCarSide,
  faCamera,
  faMapMarkerAlt,
  faXmark,
  faMagnifyingGlass,
  faUsers,
  faCircleUser,
  faTrash,
  faUserPlus,
  faCircleCheck,
  faPlus,
  faGrip,
  faDisplay,
  faSquare,
  faSquareSolid
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
