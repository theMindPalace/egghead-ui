import React, {PropTypes} from 'react'
import {keys} from 'lodash'
import {
EggheadAccept,
EggheadAlert,
EggheadArrowDown,
EggheadArrowLeft,
EggheadArrowRight,
EggheadArrowUp,
EggheadCheck,
EggheadCheckWatched,
EggheadCircleArrowDownOutline,
EggheadClockTime,
EggheadCommentAlert,
EggheadCross,
EggheadEdit,
EggheadEnterSearch,
EggheadFacebook,
EggheadFlag,
EggheadFolderLanguage,
EggheadFullCoursesHeadline,
EggheadHeart,
EggheadHelp,
EggheadHistory,
EggheadInfo,
EggheadLessonPlayPlaylist,
EggheadMail,
EggheadPlay,
EggheadPlayCourse,
EggheadPlayLesson,
EggheadPlus,
EggheadProfile,
EggheadProgressRing,
EggheadQuestion,
EggheadQuickLessonsHeadline,
EggheadRefresh,
EggheadRequest,
EggheadRevise,
EggheadRss,
EggheadStarFill,
EggheadStarOutline,
EggheadStats,
EggheadTechnology,
EggheadThumbsDown,
EggheadThumbsUp,
EggheadTimerPlus,
EggheadTwitter,
EggheadUpdate,
EggheadUpload,
EggheadUploadCloud,
} from 'react-icons/lib/egghead'
import {
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaBars,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretSquareODown,
  FaCaretSquareOLeft,
  FaCaretSquareORight,
  FaCaretSquareOUp,
  FaCaretUp,
  FaCheckCircle,
  FaCheckCircleO,
  FaCheckSquareO,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaClockO,
  FaClone,
  FaClose,
  FaDownload,
  FaExclamationCircle,
  FaExternalLink,
  FaEye,
  FaFileO,
  FaFileTextO,
  FaFolderOpenO,
  FaGithub,
  FaHome,
  FaInfoCircle,
  FaListAlt,
  FaListUl,
  FaLongArrowDown,
  FaLongArrowLeft,
  FaLongArrowRight,
  FaLongArrowUp,
  FaMailReply,
  FaMinusCircle,
  FaMoney,
  FaPencil,
  FaPrint,
  FaSearch,
  FaShareAlt,
  FaSignOut,
  FaSlack,
  FaSquare,
  FaSquareO,
  FaTimesCircle,
  FaUser,
} from 'react-icons/lib/fa'
import colors from 'package/utils/colors'

const typeToSvgIcon = {
  'accept': EggheadAccept,
  'add': EggheadPlus,
  'alert': EggheadAlert,
  'angle-double-down': FaAngleDoubleDown,
  'angle-double-left': FaAngleDoubleLeft,
  'angle-double-right': FaAngleDoubleRight,
  'angle-double-up': FaAngleDoubleUp,
  'angle-down': FaAngleDown,
  'angle-left': FaAngleLeft,
  'angle-right': FaAngleRight,
  'angle-up': FaAngleUp,
  'arrow-down': EggheadArrowDown,
  'arrow-left': EggheadArrowLeft,
  'arrow-right': EggheadArrowRight,
  'arrow-up': EggheadArrowUp,
  'box': FaSquareO,
  'box-check': FaCheckSquareO,
  'cancel': EggheadCross,
  'caret-down': FaCaretDown,
  'caret-left': FaCaretLeft,
  'caret-right': FaCaretRight,
  'caret-square-o-down': FaCaretSquareODown,
  'caret-square-o-left': FaCaretSquareOLeft,
  'caret-square-o-right': FaCaretSquareORight,
  'caret-square-o-up': FaCaretSquareOUp,
  'caret-up': FaCaretUp,
  'check': EggheadCheck,
  'check-circle': FaCheckCircle,
  'check-circle-o': FaCheckCircleO,
  'check-watched': EggheadCheckWatched,
  'chevron-down': FaChevronDown,
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
  'chevron-up': FaChevronUp,
  'circle-arrow-down-outline': EggheadCircleArrowDownOutline,
  'clock': FaClockO,
  'clock-time': EggheadClockTime,
  'clone': FaClone,
  'close': FaClose,
  'comment-alert': EggheadCommentAlert,
  'course': FaFolderOpenO,
  'course-headline': EggheadFullCoursesHeadline,
  'dollar': FaMoney,
  'download': FaDownload,
  'edit': EggheadEdit,
  'enter': EggheadEnterSearch,
  'external-link': FaExternalLink,
  'eye': FaEye,
  'facebook': EggheadFacebook,
  'file-text-o': FaFileTextO,
  'flag': EggheadFlag,
  'folder-language': EggheadFolderLanguage,
  'github': FaGithub,
  'heart': EggheadHeart,
  'help': EggheadHelp,
  'history': EggheadHistory,
  'home': FaHome,
  'info': EggheadInfo,
  'info-circle': FaInfoCircle,
  'lesson': FaFileO,
  'lesson-headline': EggheadQuickLessonsHeadline,
  'lesson-play-playlist': EggheadLessonPlayPlaylist,
  'list-alt': FaListAlt,
  'list-ul': FaListUl,
  'long-arrow-down': FaLongArrowDown,
  'long-arrow-left': FaLongArrowLeft,
  'long-arrow-right': FaLongArrowRight,
  'long-arrow-up': FaLongArrowUp,
  'mail': EggheadMail,
  'menu': FaBars,
  'pencil': FaPencil,
  'play': EggheadPlay,
  'play-course': EggheadPlayCourse,
  'play-lesson': EggheadPlayLesson,
  'print': FaPrint,
  'profile': EggheadProfile,
  'progress-ring': EggheadProgressRing,
  'question': EggheadQuestion,
  'refresh': EggheadRefresh,
  'remove': FaMinusCircle,
  'reply': FaMailReply,
  'request': EggheadRequest,
  'revise': EggheadRevise,
  'rss': EggheadRss,
  'search': FaSearch,
  'share': FaShareAlt,
  'sign-out': FaSignOut,
  'slack': FaSlack,
  'square': FaSquare,
  'star-fill': EggheadStarFill,
  'star-outline': EggheadStarOutline,
  'stats': EggheadStats,
  'success': FaCheckCircle,
  'technology': EggheadTechnology,
  'thumbs-down': EggheadThumbsDown,
  'thumbs-up': EggheadThumbsUp,
  'timer-plus': EggheadTimerPlus,
  'times-circle': FaTimesCircle,
  'twitter': EggheadTwitter,
  'update': EggheadUpdate,
  'upload': EggheadUpload,
  'upload-cloud': EggheadUploadCloud,
  'user': FaUser,
  'warning': FaExclamationCircle,
}

export const types = keys(typeToSvgIcon)

const sizeToClass = {
  1: 'f1',
  2: 'f2',
  3: 'f3',
  4: 'f4',
  5: 'f5',
  6: 'f6'
}

export const sizes = keys(sizeToClass)

const Icon = ({
  type,
  size,
  color,
}) => {
  const DynamicIcon = typeToSvgIcon[type]
  return <DynamicIcon className={`${sizeToClass[size]} ${color}`} />
}

Icon.propTypes = {
  type: PropTypes.oneOf(types).isRequired,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
}

Icon.defaultProps = {
  size: '3',
  color: 'dark-gray',
}

export default Icon
