/// [name] match in ["@heroicons/vue/24/outline", "@heroicons/vue/24/solid"]
import * as IconOutline from "@heroicons/vue/24/outline";
import * as IconSolid from "@heroicons/vue/24/solid";

export function getIcon(name: string, type: "outline" | "solid" = "outline") {
  var nameIcon = name;
  if (name.match("[a-z-]")) {
    nameIcon = name
      .split("-")
      .map((e) => `${e.substring(0, 1).toLocaleUpperCase()}${e.substring(1)}`)
      .join("");
    nameIcon = `${nameIcon}Icon`;
  }
  // console.log("type :", type, ", nameIcon :", nameIcon);

  switch (nameIcon) {
    case "AcademicCapIcon":
      return type == "solid"
        ? IconSolid.AcademicCapIcon
        : IconOutline.AcademicCapIcon;
    case "AdjustmentsHorizontalIcon":
      return type == "solid"
        ? IconSolid.AdjustmentsHorizontalIcon
        : IconOutline.AdjustmentsHorizontalIcon;
    case "AdjustmentsVerticalIcon":
      return type == "solid"
        ? IconSolid.AdjustmentsVerticalIcon
        : IconOutline.AdjustmentsVerticalIcon;
    case "ArchiveBoxArrowDownIcon":
      return type == "solid"
        ? IconSolid.ArchiveBoxArrowDownIcon
        : IconOutline.ArchiveBoxArrowDownIcon;
    case "ArchiveBoxXMarkIcon":
      return type == "solid"
        ? IconSolid.ArchiveBoxXMarkIcon
        : IconOutline.ArchiveBoxXMarkIcon;
    case "ArchiveBoxIcon":
      return type == "solid"
        ? IconSolid.ArchiveBoxIcon
        : IconOutline.ArchiveBoxIcon;
    case "ArrowDownCircleIcon":
      return type == "solid"
        ? IconSolid.ArrowDownCircleIcon
        : IconOutline.ArrowDownCircleIcon;
    case "ArrowDownLeftIcon":
      return type == "solid"
        ? IconSolid.ArrowDownLeftIcon
        : IconOutline.ArrowDownLeftIcon;
    case "ArrowDownOnSquareStackIcon":
      return type == "solid"
        ? IconSolid.ArrowDownOnSquareStackIcon
        : IconOutline.ArrowDownOnSquareStackIcon;
    case "ArrowDownOnSquareIcon":
      return type == "solid"
        ? IconSolid.ArrowDownOnSquareIcon
        : IconOutline.ArrowDownOnSquareIcon;
    case "ArrowDownRightIcon":
      return type == "solid"
        ? IconSolid.ArrowDownRightIcon
        : IconOutline.ArrowDownRightIcon;
    case "ArrowDownTrayIcon":
      return type == "solid"
        ? IconSolid.ArrowDownTrayIcon
        : IconOutline.ArrowDownTrayIcon;
    case "ArrowDownIcon":
      return type == "solid"
        ? IconSolid.ArrowDownIcon
        : IconOutline.ArrowDownIcon;
    case "ArrowLeftCircleIcon":
      return type == "solid"
        ? IconSolid.ArrowLeftCircleIcon
        : IconOutline.ArrowLeftCircleIcon;
    case "ArrowLeftOnRectangleIcon":
      return type == "solid"
        ? IconSolid.ArrowLeftOnRectangleIcon
        : IconOutline.ArrowLeftOnRectangleIcon;
    case "ArrowLeftIcon":
      return type == "solid"
        ? IconSolid.ArrowLeftIcon
        : IconOutline.ArrowLeftIcon;
    case "ArrowLongDownIcon":
      return type == "solid"
        ? IconSolid.ArrowLongDownIcon
        : IconOutline.ArrowLongDownIcon;
    case "ArrowLongLeftIcon":
      return type == "solid"
        ? IconSolid.ArrowLongLeftIcon
        : IconOutline.ArrowLongLeftIcon;
    case "ArrowLongRightIcon":
      return type == "solid"
        ? IconSolid.ArrowLongRightIcon
        : IconOutline.ArrowLongRightIcon;
    case "ArrowLongUpIcon":
      return type == "solid"
        ? IconSolid.ArrowLongUpIcon
        : IconOutline.ArrowLongUpIcon;
    case "ArrowPathRoundedSquareIcon":
      return type == "solid"
        ? IconSolid.ArrowPathRoundedSquareIcon
        : IconOutline.ArrowPathRoundedSquareIcon;
    case "ArrowPathIcon":
      return type == "solid"
        ? IconSolid.ArrowPathIcon
        : IconOutline.ArrowPathIcon;
    case "ArrowRightCircleIcon":
      return type == "solid"
        ? IconSolid.ArrowRightCircleIcon
        : IconOutline.ArrowRightCircleIcon;
    case "ArrowRightOnRectangleIcon":
      return type == "solid"
        ? IconSolid.ArrowRightOnRectangleIcon
        : IconOutline.ArrowRightOnRectangleIcon;
    case "ArrowRightIcon":
      return type == "solid"
        ? IconSolid.ArrowRightIcon
        : IconOutline.ArrowRightIcon;
    case "ArrowSmallDownIcon":
      return type == "solid"
        ? IconSolid.ArrowSmallDownIcon
        : IconOutline.ArrowSmallDownIcon;
    case "ArrowSmallLeftIcon":
      return type == "solid"
        ? IconSolid.ArrowSmallLeftIcon
        : IconOutline.ArrowSmallLeftIcon;
    case "ArrowSmallRightIcon":
      return type == "solid"
        ? IconSolid.ArrowSmallRightIcon
        : IconOutline.ArrowSmallRightIcon;
    case "ArrowSmallUpIcon":
      return type == "solid"
        ? IconSolid.ArrowSmallUpIcon
        : IconOutline.ArrowSmallUpIcon;
    case "ArrowTopRightOnSquareIcon":
      return type == "solid"
        ? IconSolid.ArrowTopRightOnSquareIcon
        : IconOutline.ArrowTopRightOnSquareIcon;
    case "ArrowTrendingDownIcon":
      return type == "solid"
        ? IconSolid.ArrowTrendingDownIcon
        : IconOutline.ArrowTrendingDownIcon;
    case "ArrowTrendingUpIcon":
      return type == "solid"
        ? IconSolid.ArrowTrendingUpIcon
        : IconOutline.ArrowTrendingUpIcon;
    case "ArrowUpCircleIcon":
      return type == "solid"
        ? IconSolid.ArrowUpCircleIcon
        : IconOutline.ArrowUpCircleIcon;
    case "ArrowUpLeftIcon":
      return type == "solid"
        ? IconSolid.ArrowUpLeftIcon
        : IconOutline.ArrowUpLeftIcon;
    case "ArrowUpOnSquareStackIcon":
      return type == "solid"
        ? IconSolid.ArrowUpOnSquareStackIcon
        : IconOutline.ArrowUpOnSquareStackIcon;
    case "ArrowUpOnSquareIcon":
      return type == "solid"
        ? IconSolid.ArrowUpOnSquareIcon
        : IconOutline.ArrowUpOnSquareIcon;
    case "ArrowUpRightIcon":
      return type == "solid"
        ? IconSolid.ArrowUpRightIcon
        : IconOutline.ArrowUpRightIcon;
    case "ArrowUpTrayIcon":
      return type == "solid"
        ? IconSolid.ArrowUpTrayIcon
        : IconOutline.ArrowUpTrayIcon;
    case "ArrowUpIcon":
      return type == "solid" ? IconSolid.ArrowUpIcon : IconOutline.ArrowUpIcon;
    case "ArrowUturnDownIcon":
      return type == "solid"
        ? IconSolid.ArrowUturnDownIcon
        : IconOutline.ArrowUturnDownIcon;
    case "ArrowUturnLeftIcon":
      return type == "solid"
        ? IconSolid.ArrowUturnLeftIcon
        : IconOutline.ArrowUturnLeftIcon;
    case "ArrowUturnRightIcon":
      return type == "solid"
        ? IconSolid.ArrowUturnRightIcon
        : IconOutline.ArrowUturnRightIcon;
    case "ArrowUturnUpIcon":
      return type == "solid"
        ? IconSolid.ArrowUturnUpIcon
        : IconOutline.ArrowUturnUpIcon;
    case "ArrowsPointingInIcon":
      return type == "solid"
        ? IconSolid.ArrowsPointingInIcon
        : IconOutline.ArrowsPointingInIcon;
    case "ArrowsPointingOutIcon":
      return type == "solid"
        ? IconSolid.ArrowsPointingOutIcon
        : IconOutline.ArrowsPointingOutIcon;
    case "ArrowsRightLeftIcon":
      return type == "solid"
        ? IconSolid.ArrowsRightLeftIcon
        : IconOutline.ArrowsRightLeftIcon;
    case "ArrowsUpDownIcon":
      return type == "solid"
        ? IconSolid.ArrowsUpDownIcon
        : IconOutline.ArrowsUpDownIcon;
    case "AtSymbolIcon":
      return type == "solid"
        ? IconSolid.AtSymbolIcon
        : IconOutline.AtSymbolIcon;
    case "BackspaceIcon":
      return type == "solid"
        ? IconSolid.BackspaceIcon
        : IconOutline.BackspaceIcon;
    case "BackwardIcon":
      return type == "solid"
        ? IconSolid.BackwardIcon
        : IconOutline.BackwardIcon;
    case "BanknotesIcon":
      return type == "solid"
        ? IconSolid.BanknotesIcon
        : IconOutline.BanknotesIcon;
    case "Bars2Icon":
      return type == "solid" ? IconSolid.Bars2Icon : IconOutline.Bars2Icon;
    case "Bars3BottomLeftIcon":
      return type == "solid"
        ? IconSolid.Bars3BottomLeftIcon
        : IconOutline.Bars3BottomLeftIcon;
    case "Bars3BottomRightIcon":
      return type == "solid"
        ? IconSolid.Bars3BottomRightIcon
        : IconOutline.Bars3BottomRightIcon;
    case "Bars3CenterLeftIcon":
      return type == "solid"
        ? IconSolid.Bars3CenterLeftIcon
        : IconOutline.Bars3CenterLeftIcon;
    case "Bars3Icon":
      return type == "solid" ? IconSolid.Bars3Icon : IconOutline.Bars3Icon;
    case "Bars4Icon":
      return type == "solid" ? IconSolid.Bars4Icon : IconOutline.Bars4Icon;
    case "BarsArrowDownIcon":
      return type == "solid"
        ? IconSolid.BarsArrowDownIcon
        : IconOutline.BarsArrowDownIcon;
    case "BarsArrowUpIcon":
      return type == "solid"
        ? IconSolid.BarsArrowUpIcon
        : IconOutline.BarsArrowUpIcon;
    case "Battery0Icon":
      return type == "solid"
        ? IconSolid.Battery0Icon
        : IconOutline.Battery0Icon;
    case "Battery100Icon":
      return type == "solid"
        ? IconSolid.Battery100Icon
        : IconOutline.Battery100Icon;
    case "Battery50Icon":
      return type == "solid"
        ? IconSolid.Battery50Icon
        : IconOutline.Battery50Icon;
    case "BeakerIcon":
      return type == "solid" ? IconSolid.BeakerIcon : IconOutline.BeakerIcon;
    case "BellAlertIcon":
      return type == "solid"
        ? IconSolid.BellAlertIcon
        : IconOutline.BellAlertIcon;
    case "BellSlashIcon":
      return type == "solid"
        ? IconSolid.BellSlashIcon
        : IconOutline.BellSlashIcon;
    case "BellSnoozeIcon":
      return type == "solid"
        ? IconSolid.BellSnoozeIcon
        : IconOutline.BellSnoozeIcon;
    case "BellIcon":
      return type == "solid" ? IconSolid.BellIcon : IconOutline.BellIcon;
    case "BoltSlashIcon":
      return type == "solid"
        ? IconSolid.BoltSlashIcon
        : IconOutline.BoltSlashIcon;
    case "BoltIcon":
      return type == "solid" ? IconSolid.BoltIcon : IconOutline.BoltIcon;
    case "BookOpenIcon":
      return type == "solid"
        ? IconSolid.BookOpenIcon
        : IconOutline.BookOpenIcon;
    case "BookmarkSlashIcon":
      return type == "solid"
        ? IconSolid.BookmarkSlashIcon
        : IconOutline.BookmarkSlashIcon;
    case "BookmarkSquareIcon":
      return type == "solid"
        ? IconSolid.BookmarkSquareIcon
        : IconOutline.BookmarkSquareIcon;
    case "BookmarkIcon":
      return type == "solid"
        ? IconSolid.BookmarkIcon
        : IconOutline.BookmarkIcon;
    case "BriefcaseIcon":
      return type == "solid"
        ? IconSolid.BriefcaseIcon
        : IconOutline.BriefcaseIcon;
    case "BugAntIcon":
      return type == "solid" ? IconSolid.BugAntIcon : IconOutline.BugAntIcon;
    case "BuildingLibraryIcon":
      return type == "solid"
        ? IconSolid.BuildingLibraryIcon
        : IconOutline.BuildingLibraryIcon;
    case "BuildingOffice2Icon":
      return type == "solid"
        ? IconSolid.BuildingOffice2Icon
        : IconOutline.BuildingOffice2Icon;
    case "BuildingOfficeIcon":
      return type == "solid"
        ? IconSolid.BuildingOfficeIcon
        : IconOutline.BuildingOfficeIcon;
    case "BuildingStorefrontIcon":
      return type == "solid"
        ? IconSolid.BuildingStorefrontIcon
        : IconOutline.BuildingStorefrontIcon;
    case "CakeIcon":
      return type == "solid" ? IconSolid.CakeIcon : IconOutline.CakeIcon;
    case "CalculatorIcon":
      return type == "solid"
        ? IconSolid.CalculatorIcon
        : IconOutline.CalculatorIcon;
    case "CalendarDaysIcon":
      return type == "solid"
        ? IconSolid.CalendarDaysIcon
        : IconOutline.CalendarDaysIcon;
    case "CalendarIcon":
      return type == "solid"
        ? IconSolid.CalendarIcon
        : IconOutline.CalendarIcon;
    case "CameraIcon":
      return type == "solid" ? IconSolid.CameraIcon : IconOutline.CameraIcon;
    case "ChartBarSquareIcon":
      return type == "solid"
        ? IconSolid.ChartBarSquareIcon
        : IconOutline.ChartBarSquareIcon;
    case "ChartBarIcon":
      return type == "solid"
        ? IconSolid.ChartBarIcon
        : IconOutline.ChartBarIcon;
    case "ChartPieIcon":
      return type == "solid"
        ? IconSolid.ChartPieIcon
        : IconOutline.ChartPieIcon;
    case "ChatBubbleBottomCenterTextIcon":
      return type == "solid"
        ? IconSolid.ChatBubbleBottomCenterTextIcon
        : IconOutline.ChatBubbleBottomCenterTextIcon;
    case "ChatBubbleBottomCenterIcon":
      return type == "solid"
        ? IconSolid.ChatBubbleBottomCenterIcon
        : IconOutline.ChatBubbleBottomCenterIcon;
    case "ChatBubbleLeftEllipsisIcon":
      return type == "solid"
        ? IconSolid.ChatBubbleLeftEllipsisIcon
        : IconOutline.ChatBubbleLeftEllipsisIcon;
    case "ChatBubbleLeftRightIcon":
      return type == "solid"
        ? IconSolid.ChatBubbleLeftRightIcon
        : IconOutline.ChatBubbleLeftRightIcon;
    case "ChatBubbleLeftIcon":
      return type == "solid"
        ? IconSolid.ChatBubbleLeftIcon
        : IconOutline.ChatBubbleLeftIcon;
    case "ChatBubbleOvalLeftEllipsisIcon":
      return type == "solid"
        ? IconSolid.ChatBubbleOvalLeftEllipsisIcon
        : IconOutline.ChatBubbleOvalLeftEllipsisIcon;
    case "ChatBubbleOvalLeftIcon":
      return type == "solid"
        ? IconSolid.ChatBubbleOvalLeftIcon
        : IconOutline.ChatBubbleOvalLeftIcon;
    case "CheckBadgeIcon":
      return type == "solid"
        ? IconSolid.CheckBadgeIcon
        : IconOutline.CheckBadgeIcon;
    case "CheckCircleIcon":
      return type == "solid"
        ? IconSolid.CheckCircleIcon
        : IconOutline.CheckCircleIcon;
    case "CheckIcon":
      return type == "solid" ? IconSolid.CheckIcon : IconOutline.CheckIcon;
    case "ChevronDoubleDownIcon":
      return type == "solid"
        ? IconSolid.ChevronDoubleDownIcon
        : IconOutline.ChevronDoubleDownIcon;
    case "ChevronDoubleLeftIcon":
      return type == "solid"
        ? IconSolid.ChevronDoubleLeftIcon
        : IconOutline.ChevronDoubleLeftIcon;
    case "ChevronDoubleRightIcon":
      return type == "solid"
        ? IconSolid.ChevronDoubleRightIcon
        : IconOutline.ChevronDoubleRightIcon;
    case "ChevronDoubleUpIcon":
      return type == "solid"
        ? IconSolid.ChevronDoubleUpIcon
        : IconOutline.ChevronDoubleUpIcon;
    case "ChevronDownIcon":
      return type == "solid"
        ? IconSolid.ChevronDownIcon
        : IconOutline.ChevronDownIcon;
    case "ChevronLeftIcon":
      return type == "solid"
        ? IconSolid.ChevronLeftIcon
        : IconOutline.ChevronLeftIcon;
    case "ChevronRightIcon":
      return type == "solid"
        ? IconSolid.ChevronRightIcon
        : IconOutline.ChevronRightIcon;
    case "ChevronUpDownIcon":
      return type == "solid"
        ? IconSolid.ChevronUpDownIcon
        : IconOutline.ChevronUpDownIcon;
    case "ChevronUpIcon":
      return type == "solid"
        ? IconSolid.ChevronUpIcon
        : IconOutline.ChevronUpIcon;
    case "CircleStackIcon":
      return type == "solid"
        ? IconSolid.CircleStackIcon
        : IconOutline.CircleStackIcon;
    case "ClipboardDocumentCheckIcon":
      return type == "solid"
        ? IconSolid.ClipboardDocumentCheckIcon
        : IconOutline.ClipboardDocumentCheckIcon;
    case "ClipboardDocumentListIcon":
      return type == "solid"
        ? IconSolid.ClipboardDocumentListIcon
        : IconOutline.ClipboardDocumentListIcon;
    case "ClipboardDocumentIcon":
      return type == "solid"
        ? IconSolid.ClipboardDocumentIcon
        : IconOutline.ClipboardDocumentIcon;
    case "ClipboardIcon":
      return type == "solid"
        ? IconSolid.ClipboardIcon
        : IconOutline.ClipboardIcon;
    case "ClockIcon":
      return type == "solid" ? IconSolid.ClockIcon : IconOutline.ClockIcon;
    case "CloudArrowDownIcon":
      return type == "solid"
        ? IconSolid.CloudArrowDownIcon
        : IconOutline.CloudArrowDownIcon;
    case "CloudArrowUpIcon":
      return type == "solid"
        ? IconSolid.CloudArrowUpIcon
        : IconOutline.CloudArrowUpIcon;
    case "CloudIcon":
      return type == "solid" ? IconSolid.CloudIcon : IconOutline.CloudIcon;
    case "CodeBracketSquareIcon":
      return type == "solid"
        ? IconSolid.CodeBracketSquareIcon
        : IconOutline.CodeBracketSquareIcon;
    case "CodeBracketIcon":
      return type == "solid"
        ? IconSolid.CodeBracketIcon
        : IconOutline.CodeBracketIcon;
    case "Cog6ToothIcon":
      return type == "solid"
        ? IconSolid.Cog6ToothIcon
        : IconOutline.Cog6ToothIcon;
    case "Cog8ToothIcon":
      return type == "solid"
        ? IconSolid.Cog8ToothIcon
        : IconOutline.Cog8ToothIcon;
    case "CogIcon":
      return type == "solid" ? IconSolid.CogIcon : IconOutline.CogIcon;
    case "CommandLineIcon":
      return type == "solid"
        ? IconSolid.CommandLineIcon
        : IconOutline.CommandLineIcon;
    case "ComputerDesktopIcon":
      return type == "solid"
        ? IconSolid.ComputerDesktopIcon
        : IconOutline.ComputerDesktopIcon;
    case "CpuChipIcon":
      return type == "solid" ? IconSolid.CpuChipIcon : IconOutline.CpuChipIcon;
    case "CreditCardIcon":
      return type == "solid"
        ? IconSolid.CreditCardIcon
        : IconOutline.CreditCardIcon;
    case "CubeTransparentIcon":
      return type == "solid"
        ? IconSolid.CubeTransparentIcon
        : IconOutline.CubeTransparentIcon;
    case "CubeIcon":
      return type == "solid" ? IconSolid.CubeIcon : IconOutline.CubeIcon;
    case "CurrencyBangladeshiIcon":
      return type == "solid"
        ? IconSolid.CurrencyBangladeshiIcon
        : IconOutline.CurrencyBangladeshiIcon;
    case "CurrencyDollarIcon":
      return type == "solid"
        ? IconSolid.CurrencyDollarIcon
        : IconOutline.CurrencyDollarIcon;
    case "CurrencyEuroIcon":
      return type == "solid"
        ? IconSolid.CurrencyEuroIcon
        : IconOutline.CurrencyEuroIcon;
    case "CurrencyPoundIcon":
      return type == "solid"
        ? IconSolid.CurrencyPoundIcon
        : IconOutline.CurrencyPoundIcon;
    case "CurrencyRupeeIcon":
      return type == "solid"
        ? IconSolid.CurrencyRupeeIcon
        : IconOutline.CurrencyRupeeIcon;
    case "CurrencyYenIcon":
      return type == "solid"
        ? IconSolid.CurrencyYenIcon
        : IconOutline.CurrencyYenIcon;
    case "CursorArrowRaysIcon":
      return type == "solid"
        ? IconSolid.CursorArrowRaysIcon
        : IconOutline.CursorArrowRaysIcon;
    case "CursorArrowRippleIcon":
      return type == "solid"
        ? IconSolid.CursorArrowRippleIcon
        : IconOutline.CursorArrowRippleIcon;
    case "DevicePhoneMobileIcon":
      return type == "solid"
        ? IconSolid.DevicePhoneMobileIcon
        : IconOutline.DevicePhoneMobileIcon;
    case "DeviceTabletIcon":
      return type == "solid"
        ? IconSolid.DeviceTabletIcon
        : IconOutline.DeviceTabletIcon;
    case "DocumentArrowDownIcon":
      return type == "solid"
        ? IconSolid.DocumentArrowDownIcon
        : IconOutline.DocumentArrowDownIcon;
    case "DocumentArrowUpIcon":
      return type == "solid"
        ? IconSolid.DocumentArrowUpIcon
        : IconOutline.DocumentArrowUpIcon;
    case "DocumentChartBarIcon":
      return type == "solid"
        ? IconSolid.DocumentChartBarIcon
        : IconOutline.DocumentChartBarIcon;
    case "DocumentCheckIcon":
      return type == "solid"
        ? IconSolid.DocumentCheckIcon
        : IconOutline.DocumentCheckIcon;
    case "DocumentDuplicateIcon":
      return type == "solid"
        ? IconSolid.DocumentDuplicateIcon
        : IconOutline.DocumentDuplicateIcon;
    case "DocumentMagnifyingGlassIcon":
      return type == "solid"
        ? IconSolid.DocumentMagnifyingGlassIcon
        : IconOutline.DocumentMagnifyingGlassIcon;
    case "DocumentMinusIcon":
      return type == "solid"
        ? IconSolid.DocumentMinusIcon
        : IconOutline.DocumentMinusIcon;
    case "DocumentPlusIcon":
      return type == "solid"
        ? IconSolid.DocumentPlusIcon
        : IconOutline.DocumentPlusIcon;
    case "DocumentTextIcon":
      return type == "solid"
        ? IconSolid.DocumentTextIcon
        : IconOutline.DocumentTextIcon;
    case "DocumentIcon":
      return type == "solid"
        ? IconSolid.DocumentIcon
        : IconOutline.DocumentIcon;
    case "EllipsisHorizontalCircleIcon":
      return type == "solid"
        ? IconSolid.EllipsisHorizontalCircleIcon
        : IconOutline.EllipsisHorizontalCircleIcon;
    case "EllipsisHorizontalIcon":
      return type == "solid"
        ? IconSolid.EllipsisHorizontalIcon
        : IconOutline.EllipsisHorizontalIcon;
    case "EllipsisVerticalIcon":
      return type == "solid"
        ? IconSolid.EllipsisVerticalIcon
        : IconOutline.EllipsisVerticalIcon;
    case "EnvelopeOpenIcon":
      return type == "solid"
        ? IconSolid.EnvelopeOpenIcon
        : IconOutline.EnvelopeOpenIcon;
    case "EnvelopeIcon":
      return type == "solid"
        ? IconSolid.EnvelopeIcon
        : IconOutline.EnvelopeIcon;
    case "ExclamationCircleIcon":
      return type == "solid"
        ? IconSolid.ExclamationCircleIcon
        : IconOutline.ExclamationCircleIcon;
    case "ExclamationTriangleIcon":
      return type == "solid"
        ? IconSolid.ExclamationTriangleIcon
        : IconOutline.ExclamationTriangleIcon;
    case "EyeDropperIcon":
      return type == "solid"
        ? IconSolid.EyeDropperIcon
        : IconOutline.EyeDropperIcon;
    case "EyeSlashIcon":
      return type == "solid"
        ? IconSolid.EyeSlashIcon
        : IconOutline.EyeSlashIcon;
    case "EyeIcon":
      return type == "solid" ? IconSolid.EyeIcon : IconOutline.EyeIcon;
    case "FaceFrownIcon":
      return type == "solid"
        ? IconSolid.FaceFrownIcon
        : IconOutline.FaceFrownIcon;
    case "FaceSmileIcon":
      return type == "solid"
        ? IconSolid.FaceSmileIcon
        : IconOutline.FaceSmileIcon;
    case "FilmIcon":
      return type == "solid" ? IconSolid.FilmIcon : IconOutline.FilmIcon;
    case "FingerPrintIcon":
      return type == "solid"
        ? IconSolid.FingerPrintIcon
        : IconOutline.FingerPrintIcon;
    case "FireIcon":
      return type == "solid" ? IconSolid.FireIcon : IconOutline.FireIcon;
    case "FlagIcon":
      return type == "solid" ? IconSolid.FlagIcon : IconOutline.FlagIcon;
    case "FolderArrowDownIcon":
      return type == "solid"
        ? IconSolid.FolderArrowDownIcon
        : IconOutline.FolderArrowDownIcon;
    case "FolderMinusIcon":
      return type == "solid"
        ? IconSolid.FolderMinusIcon
        : IconOutline.FolderMinusIcon;
    case "FolderOpenIcon":
      return type == "solid"
        ? IconSolid.FolderOpenIcon
        : IconOutline.FolderOpenIcon;
    case "FolderPlusIcon":
      return type == "solid"
        ? IconSolid.FolderPlusIcon
        : IconOutline.FolderPlusIcon;
    case "FolderIcon":
      return type == "solid" ? IconSolid.FolderIcon : IconOutline.FolderIcon;
    case "ForwardIcon":
      return type == "solid" ? IconSolid.ForwardIcon : IconOutline.ForwardIcon;
    case "FunnelIcon":
      return type == "solid" ? IconSolid.FunnelIcon : IconOutline.FunnelIcon;
    case "GifIcon":
      return type == "solid" ? IconSolid.GifIcon : IconOutline.GifIcon;
    case "GiftTopIcon":
      return type == "solid" ? IconSolid.GiftTopIcon : IconOutline.GiftTopIcon;
    case "GiftIcon":
      return type == "solid" ? IconSolid.GiftIcon : IconOutline.GiftIcon;
    case "GlobeAltIcon":
      return type == "solid"
        ? IconSolid.GlobeAltIcon
        : IconOutline.GlobeAltIcon;
    case "GlobeAmericasIcon":
      return type == "solid"
        ? IconSolid.GlobeAmericasIcon
        : IconOutline.GlobeAmericasIcon;
    case "GlobeAsiaAustraliaIcon":
      return type == "solid"
        ? IconSolid.GlobeAsiaAustraliaIcon
        : IconOutline.GlobeAsiaAustraliaIcon;
    case "GlobeEuropeAfricaIcon":
      return type == "solid"
        ? IconSolid.GlobeEuropeAfricaIcon
        : IconOutline.GlobeEuropeAfricaIcon;
    case "HandRaisedIcon":
      return type == "solid"
        ? IconSolid.HandRaisedIcon
        : IconOutline.HandRaisedIcon;
    case "HandThumbDownIcon":
      return type == "solid"
        ? IconSolid.HandThumbDownIcon
        : IconOutline.HandThumbDownIcon;
    case "HandThumbUpIcon":
      return type == "solid"
        ? IconSolid.HandThumbUpIcon
        : IconOutline.HandThumbUpIcon;
    case "HashtagIcon":
      return type == "solid" ? IconSolid.HashtagIcon : IconOutline.HashtagIcon;
    case "HeartIcon":
      return type == "solid" ? IconSolid.HeartIcon : IconOutline.HeartIcon;
    case "HomeModernIcon":
      return type == "solid"
        ? IconSolid.HomeModernIcon
        : IconOutline.HomeModernIcon;
    case "HomeIcon":
      return type == "solid" ? IconSolid.HomeIcon : IconOutline.HomeIcon;
    case "IdentificationIcon":
      return type == "solid"
        ? IconSolid.IdentificationIcon
        : IconOutline.IdentificationIcon;
    case "InboxArrowDownIcon":
      return type == "solid"
        ? IconSolid.InboxArrowDownIcon
        : IconOutline.InboxArrowDownIcon;
    case "InboxStackIcon":
      return type == "solid"
        ? IconSolid.InboxStackIcon
        : IconOutline.InboxStackIcon;
    case "InboxIcon":
      return type == "solid" ? IconSolid.InboxIcon : IconOutline.InboxIcon;
    case "InformationCircleIcon":
      return type == "solid"
        ? IconSolid.InformationCircleIcon
        : IconOutline.InformationCircleIcon;
    case "KeyIcon":
      return type == "solid" ? IconSolid.KeyIcon : IconOutline.KeyIcon;
    case "LanguageIcon":
      return type == "solid"
        ? IconSolid.LanguageIcon
        : IconOutline.LanguageIcon;
    case "LifebuoyIcon":
      return type == "solid"
        ? IconSolid.LifebuoyIcon
        : IconOutline.LifebuoyIcon;
    case "LightBulbIcon":
      return type == "solid"
        ? IconSolid.LightBulbIcon
        : IconOutline.LightBulbIcon;
    case "LinkIcon":
      return type == "solid" ? IconSolid.LinkIcon : IconOutline.LinkIcon;
    case "ListBulletIcon":
      return type == "solid"
        ? IconSolid.ListBulletIcon
        : IconOutline.ListBulletIcon;
    case "LockClosedIcon":
      return type == "solid"
        ? IconSolid.LockClosedIcon
        : IconOutline.LockClosedIcon;
    case "LockOpenIcon":
      return type == "solid"
        ? IconSolid.LockOpenIcon
        : IconOutline.LockOpenIcon;
    case "MagnifyingGlassCircleIcon":
      return type == "solid"
        ? IconSolid.MagnifyingGlassCircleIcon
        : IconOutline.MagnifyingGlassCircleIcon;
    case "MagnifyingGlassMinusIcon":
      return type == "solid"
        ? IconSolid.MagnifyingGlassMinusIcon
        : IconOutline.MagnifyingGlassMinusIcon;
    case "MagnifyingGlassPlusIcon":
      return type == "solid"
        ? IconSolid.MagnifyingGlassPlusIcon
        : IconOutline.MagnifyingGlassPlusIcon;
    case "MagnifyingGlassIcon":
      return type == "solid"
        ? IconSolid.MagnifyingGlassIcon
        : IconOutline.MagnifyingGlassIcon;
    case "MapPinIcon":
      return type == "solid" ? IconSolid.MapPinIcon : IconOutline.MapPinIcon;
    case "MapIcon":
      return type == "solid" ? IconSolid.MapIcon : IconOutline.MapIcon;
    case "MegaphoneIcon":
      return type == "solid"
        ? IconSolid.MegaphoneIcon
        : IconOutline.MegaphoneIcon;
    case "MicrophoneIcon":
      return type == "solid"
        ? IconSolid.MicrophoneIcon
        : IconOutline.MicrophoneIcon;
    case "MinusCircleIcon":
      return type == "solid"
        ? IconSolid.MinusCircleIcon
        : IconOutline.MinusCircleIcon;
    case "MinusSmallIcon":
      return type == "solid"
        ? IconSolid.MinusSmallIcon
        : IconOutline.MinusSmallIcon;
    case "MinusIcon":
      return type == "solid" ? IconSolid.MinusIcon : IconOutline.MinusIcon;
    case "MoonIcon":
      return type == "solid" ? IconSolid.MoonIcon : IconOutline.MoonIcon;
    case "MusicalNoteIcon":
      return type == "solid"
        ? IconSolid.MusicalNoteIcon
        : IconOutline.MusicalNoteIcon;
    case "NewspaperIcon":
      return type == "solid"
        ? IconSolid.NewspaperIcon
        : IconOutline.NewspaperIcon;
    case "NoSymbolIcon":
      return type == "solid"
        ? IconSolid.NoSymbolIcon
        : IconOutline.NoSymbolIcon;
    case "PaintBrushIcon":
      return type == "solid"
        ? IconSolid.PaintBrushIcon
        : IconOutline.PaintBrushIcon;
    case "PaperAirplaneIcon":
      return type == "solid"
        ? IconSolid.PaperAirplaneIcon
        : IconOutline.PaperAirplaneIcon;
    case "PaperClipIcon":
      return type == "solid"
        ? IconSolid.PaperClipIcon
        : IconOutline.PaperClipIcon;
    case "PauseCircleIcon":
      return type == "solid"
        ? IconSolid.PauseCircleIcon
        : IconOutline.PauseCircleIcon;
    case "PauseIcon":
      return type == "solid" ? IconSolid.PauseIcon : IconOutline.PauseIcon;
    case "PencilSquareIcon":
      return type == "solid"
        ? IconSolid.PencilSquareIcon
        : IconOutline.PencilSquareIcon;
    case "PencilIcon":
      return type == "solid" ? IconSolid.PencilIcon : IconOutline.PencilIcon;
    case "PhoneArrowDownLeftIcon":
      return type == "solid"
        ? IconSolid.PhoneArrowDownLeftIcon
        : IconOutline.PhoneArrowDownLeftIcon;
    case "PhoneArrowUpRightIcon":
      return type == "solid"
        ? IconSolid.PhoneArrowUpRightIcon
        : IconOutline.PhoneArrowUpRightIcon;
    case "PhoneXMarkIcon":
      return type == "solid"
        ? IconSolid.PhoneXMarkIcon
        : IconOutline.PhoneXMarkIcon;
    case "PhoneIcon":
      return type == "solid" ? IconSolid.PhoneIcon : IconOutline.PhoneIcon;
    case "PhotoIcon":
      return type == "solid" ? IconSolid.PhotoIcon : IconOutline.PhotoIcon;
    case "PlayCircleIcon":
      return type == "solid"
        ? IconSolid.PlayCircleIcon
        : IconOutline.PlayCircleIcon;
    case "PlayPauseIcon":
      return type == "solid"
        ? IconSolid.PlayPauseIcon
        : IconOutline.PlayPauseIcon;
    case "PlayIcon":
      return type == "solid" ? IconSolid.PlayIcon : IconOutline.PlayIcon;
    case "PlusCircleIcon":
      return type == "solid"
        ? IconSolid.PlusCircleIcon
        : IconOutline.PlusCircleIcon;
    case "PlusSmallIcon":
      return type == "solid"
        ? IconSolid.PlusSmallIcon
        : IconOutline.PlusSmallIcon;
    case "PlusIcon":
      return type == "solid" ? IconSolid.PlusIcon : IconOutline.PlusIcon;
    case "PowerIcon":
      return type == "solid" ? IconSolid.PowerIcon : IconOutline.PowerIcon;
    case "PresentationChartBarIcon":
      return type == "solid"
        ? IconSolid.PresentationChartBarIcon
        : IconOutline.PresentationChartBarIcon;
    case "PresentationChartLineIcon":
      return type == "solid"
        ? IconSolid.PresentationChartLineIcon
        : IconOutline.PresentationChartLineIcon;
    case "PrinterIcon":
      return type == "solid" ? IconSolid.PrinterIcon : IconOutline.PrinterIcon;
    case "PuzzlePieceIcon":
      return type == "solid"
        ? IconSolid.PuzzlePieceIcon
        : IconOutline.PuzzlePieceIcon;
    case "QrCodeIcon":
      return type == "solid" ? IconSolid.QrCodeIcon : IconOutline.QrCodeIcon;
    case "QuestionMarkCircleIcon":
      return type == "solid"
        ? IconSolid.QuestionMarkCircleIcon
        : IconOutline.QuestionMarkCircleIcon;
    case "QueueListIcon":
      return type == "solid"
        ? IconSolid.QueueListIcon
        : IconOutline.QueueListIcon;
    case "RadioIcon":
      return type == "solid" ? IconSolid.RadioIcon : IconOutline.RadioIcon;
    case "ReceiptPercentIcon":
      return type == "solid"
        ? IconSolid.ReceiptPercentIcon
        : IconOutline.ReceiptPercentIcon;
    case "ReceiptRefundIcon":
      return type == "solid"
        ? IconSolid.ReceiptRefundIcon
        : IconOutline.ReceiptRefundIcon;
    case "RectangleGroupIcon":
      return type == "solid"
        ? IconSolid.RectangleGroupIcon
        : IconOutline.RectangleGroupIcon;
    case "RectangleStackIcon":
      return type == "solid"
        ? IconSolid.RectangleStackIcon
        : IconOutline.RectangleStackIcon;
    case "RocketLaunchIcon":
      return type == "solid"
        ? IconSolid.RocketLaunchIcon
        : IconOutline.RocketLaunchIcon;
    case "RssIcon":
      return type == "solid" ? IconSolid.RssIcon : IconOutline.RssIcon;
    case "ScaleIcon":
      return type == "solid" ? IconSolid.ScaleIcon : IconOutline.ScaleIcon;
    case "ScissorsIcon":
      return type == "solid"
        ? IconSolid.ScissorsIcon
        : IconOutline.ScissorsIcon;
    case "ServerStackIcon":
      return type == "solid"
        ? IconSolid.ServerStackIcon
        : IconOutline.ServerStackIcon;
    case "ServerIcon":
      return type == "solid" ? IconSolid.ServerIcon : IconOutline.ServerIcon;
    case "ShareIcon":
      return type == "solid" ? IconSolid.ShareIcon : IconOutline.ShareIcon;
    case "ShieldCheckIcon":
      return type == "solid"
        ? IconSolid.ShieldCheckIcon
        : IconOutline.ShieldCheckIcon;
    case "ShieldExclamationIcon":
      return type == "solid"
        ? IconSolid.ShieldExclamationIcon
        : IconOutline.ShieldExclamationIcon;
    case "ShoppingBagIcon":
      return type == "solid"
        ? IconSolid.ShoppingBagIcon
        : IconOutline.ShoppingBagIcon;
    case "ShoppingCartIcon":
      return type == "solid"
        ? IconSolid.ShoppingCartIcon
        : IconOutline.ShoppingCartIcon;
    case "SignalSlashIcon":
      return type == "solid"
        ? IconSolid.SignalSlashIcon
        : IconOutline.SignalSlashIcon;
    case "SignalIcon":
      return type == "solid" ? IconSolid.SignalIcon : IconOutline.SignalIcon;
    case "SparklesIcon":
      return type == "solid"
        ? IconSolid.SparklesIcon
        : IconOutline.SparklesIcon;
    case "SpeakerWaveIcon":
      return type == "solid"
        ? IconSolid.SpeakerWaveIcon
        : IconOutline.SpeakerWaveIcon;
    case "SpeakerXMarkIcon":
      return type == "solid"
        ? IconSolid.SpeakerXMarkIcon
        : IconOutline.SpeakerXMarkIcon;
    case "Square2StackIcon":
      return type == "solid"
        ? IconSolid.Square2StackIcon
        : IconOutline.Square2StackIcon;
    case "Square3Stack3DIcon":
      return type == "solid"
        ? IconSolid.Square3Stack3DIcon
        : IconOutline.Square3Stack3DIcon;
    case "Squares2X2Icon":
      return type == "solid"
        ? IconSolid.Squares2X2Icon
        : IconOutline.Squares2X2Icon;
    case "SquaresPlusIcon":
      return type == "solid"
        ? IconSolid.SquaresPlusIcon
        : IconOutline.SquaresPlusIcon;
    case "StarIcon":
      return type == "solid" ? IconSolid.StarIcon : IconOutline.StarIcon;
    case "StopCircleIcon":
      return type == "solid"
        ? IconSolid.StopCircleIcon
        : IconOutline.StopCircleIcon;
    case "StopIcon":
      return type == "solid" ? IconSolid.StopIcon : IconOutline.StopIcon;
    case "SunIcon":
      return type == "solid" ? IconSolid.SunIcon : IconOutline.SunIcon;
    case "SwatchIcon":
      return type == "solid" ? IconSolid.SwatchIcon : IconOutline.SwatchIcon;
    case "TableCellsIcon":
      return type == "solid"
        ? IconSolid.TableCellsIcon
        : IconOutline.TableCellsIcon;
    case "TagIcon":
      return type == "solid" ? IconSolid.TagIcon : IconOutline.TagIcon;
    case "TicketIcon":
      return type == "solid" ? IconSolid.TicketIcon : IconOutline.TicketIcon;
    case "TrashIcon":
      return type == "solid" ? IconSolid.TrashIcon : IconOutline.TrashIcon;
    case "TrophyIcon":
      return type == "solid" ? IconSolid.TrophyIcon : IconOutline.TrophyIcon;
    case "TruckIcon":
      return type == "solid" ? IconSolid.TruckIcon : IconOutline.TruckIcon;
    case "TvIcon":
      return type == "solid" ? IconSolid.TvIcon : IconOutline.TvIcon;
    case "UserCircleIcon":
      return type == "solid"
        ? IconSolid.UserCircleIcon
        : IconOutline.UserCircleIcon;
    case "UserGroupIcon":
      return type == "solid"
        ? IconSolid.UserGroupIcon
        : IconOutline.UserGroupIcon;
    case "UserMinusIcon":
      return type == "solid"
        ? IconSolid.UserMinusIcon
        : IconOutline.UserMinusIcon;
    case "UserPlusIcon":
      return type == "solid"
        ? IconSolid.UserPlusIcon
        : IconOutline.UserPlusIcon;
    case "UserIcon":
      return type == "solid" ? IconSolid.UserIcon : IconOutline.UserIcon;
    case "UsersIcon":
      return type == "solid" ? IconSolid.UsersIcon : IconOutline.UsersIcon;
    case "VariableIcon":
      return type == "solid"
        ? IconSolid.VariableIcon
        : IconOutline.VariableIcon;
    case "VideoCameraSlashIcon":
      return type == "solid"
        ? IconSolid.VideoCameraSlashIcon
        : IconOutline.VideoCameraSlashIcon;
    case "VideoCameraIcon":
      return type == "solid"
        ? IconSolid.VideoCameraIcon
        : IconOutline.VideoCameraIcon;
    case "ViewColumnsIcon":
      return type == "solid"
        ? IconSolid.ViewColumnsIcon
        : IconOutline.ViewColumnsIcon;
    case "ViewfinderCircleIcon":
      return type == "solid"
        ? IconSolid.ViewfinderCircleIcon
        : IconOutline.ViewfinderCircleIcon;
    case "WalletIcon":
      return type == "solid" ? IconSolid.WalletIcon : IconOutline.WalletIcon;
    case "WifiIcon":
      return type == "solid" ? IconSolid.WifiIcon : IconOutline.WifiIcon;
    case "WindowIcon":
      return type == "solid" ? IconSolid.WindowIcon : IconOutline.WindowIcon;
    case "WrenchScrewdriverIcon":
      return type == "solid"
        ? IconSolid.WrenchScrewdriverIcon
        : IconOutline.WrenchScrewdriverIcon;
    case "WrenchIcon":
      return type == "solid" ? IconSolid.WrenchIcon : IconOutline.WrenchIcon;
    case "XCircleIcon":
      return type == "solid" ? IconSolid.XCircleIcon : IconOutline.XCircleIcon;
    case "XMarkIcon":
      return type == "solid" ? IconSolid.XMarkIcon : IconOutline.XMarkIcon;

    default:
      break;
  }
}
