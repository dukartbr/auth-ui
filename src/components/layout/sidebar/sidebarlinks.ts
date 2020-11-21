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
        isAuthRoute: true,
      },
      {
        id: 2,
        title: 'Show Finder',
        path: 'show-finder',
        icon: CheckIcon,
        isAuthRoute: false,
      },
      {
        id: 3,
        title: 'Gear Swap',
        path: 'gear-swap',
        icon: CheckCircleIcon,
        isAuthRoute: false,
      },
    ],
  },
  {
    header: 'Manage Your Band',
    links: [
      {
        id: 4,
        title: 'Marketing',
        path: 'marketing',
        icon: DeleteIcon,
        isAuthRoute: true,
      },
      {
        id: 5,
        title: 'Find Musicians',
        path: 'musicians',
        icon: DragHandleIcon,
        isAuthRoute: true,
      },
      {
        id: 9,
        title: 'Merch',
        path: 'merch',
        isAuthRoute: true,
      },
    ],
  },
  {
    header: 'Book A Tour',
    links: [
      {
        id: 6,
        title: 'Venues',
        path: 'venus',
        icon: EditIcon,
        isAuthRoute: true,
      },
      {
        id: 7,
        title: 'Bands',
        path: 'bands',
        icon: EmailIcon,
        isAuthRoute: true,
      },
      {
        id: 8,
        title: 'Booking Agents',
        path: 'booking-agents',
        icon: ExternalLinkIcon,
        isAuthRoute: true,
      },
    ],
  },
];

export default sidebarLinks;
