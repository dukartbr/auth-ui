import {
  ChatIcon,
  CheckIcon,
  CheckCircleIcon,
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
} from '../../../designsystem';

const sidebarLinks = [
  {
    header: 'Explore',
    links: [
      {
        id: 1,
        title: 'Dashboard',
        path: '/',
        icon: ChatIcon,
      },
      {
        id: 2,
        title: 'Show Finder',
        path: '/explore/show-finder',
        icon: CheckIcon,
      },
      {
        id: 3,
        title: 'Gear Swap',
        path: '/explore/gear-swap',
        icon: CheckCircleIcon,
      },
    ],
  },
  {
    header: 'Manage Your Band',
    links: [
      {
        id: 4,
        title: 'Marketing',
        path: '/manage/marketing',
        icon: DeleteIcon,
      },
      {
        id: 5,
        title: 'Find Musicians',
        path: '/manage/musicians',
        icon: DragHandleIcon,
      },
      {
        id: 9,
        title: 'Merch',
        path: '/manage/merch',
      },
    ],
  },
  {
    header: 'Book A Tour',
    links: [
      {
        id: 6,
        title: 'Venues',
        path: '/tour/venus',
        icon: EditIcon,
      },
      {
        id: 7,
        title: 'Bands',
        path: '/tour/bands',
        icon: EmailIcon,
      },
      {
        id: 8,
        title: 'Booking Agents',
        path: '/tour/booking-agents',
        icon: ExternalLinkIcon,
      },
    ],
  },
];

export default sidebarLinks;
