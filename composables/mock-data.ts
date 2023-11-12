const mockMenus = [
  {
    name: "ภาพรวม",
    subtitle: "Dashboard",
    path: "/dashboard",
    icon: "chart-pie",
  },
  {
    name: "ป้ายประชาสัมพันธ์",
    subtitle: "VSM/LMS",
    path: "/vms-lms",
    icon: "clone",
    children: [
      {
        name: "จัดการข้อความ/รูปภาพ",
        subtitle: "Manage media",
        path: "/vms-lms/manage-media",
        icon: "edit",
      },
      {
        name: "ตั้งค่าการแสดงหน้าจอแนะนำเส้นทางแผนที่",
        subtitle: "Setting display map",
        path: "/vms-lms/setting-display-map",
        icon: "map",
      },
      {
        name: "ส่งข้อความขึ้นป้าย vms",
        path: "/vms-lms/send-media-to-vms",
        subtitle: "Send media to vms",
        icon: "upload",
      },
      {
        name: "ส่งข้อความขึ้นป้าย lms",
        path: "/vms-lms/send-media-to-lms",
        subtitle: "Send media to lms",
        icon: "cloud-upload-alt",
      },
    ],
  },

  {
    name: "เครื่องวัดสภาพอากาศ",
    subtitle: "Weather",
    path: "/weather",
    icon: "cloud-sun-rain",
    children: [
      {
        name: "สภาพอากาศวันนี้",
        subtitle: "Today's weather",
        path: "/weather/today-weather",
        icon: "cloud-sun",
      },
      {
        name: "ข้อมูลสภาพอากาศ",
        subtitle: "Weather information",
        path: "/weather/weather-information",
        icon: "cloud-sun-rain",
      },
      {
        name: "กราฟสภาอากาศ",
        subtitle: "Weather graph",
        path: "/weather/weather-graphs",
        icon: "chart-area",
      },
    ],
  },

  {
    name: "กล้องตรวจจับความเร็ว",
    subtitle: "Speed enforcement",
    path: "/speed-enforcement",
    icon: "camera-retro",
    children: [
      {
        name: "ข้อมูลรถ",
        subtitle: "Car information",
        path: "/speed-enforcement/car-information",
        icon: "car",
      },

      {
        name: "กราฟปริมาณรถ",
        subtitle: "Car volume graph",
        path: "/speed-enforcement/car-volume-graph",
        icon: "chart-area",
      },

      {
        name: "ปริมาณรถแยกประเภท",
        subtitle: "Volume of vehicles separated by type",
        path: "/speed-enforcement/volume-of-vehicles-separated-by-type",
        icon: "car-side",
      },
    ],
  },

  {
    name: "กล้องวงจรปิด",
    subtitle: "Ip camera",
    path: "/ip-camera",
    icon: "camera",
  },

  {
    name: "แผนที่",
    subtitle: "Map",
    path: "/map",
    icon: "map-marker-alt",
  },
];

export { mockMenus };
