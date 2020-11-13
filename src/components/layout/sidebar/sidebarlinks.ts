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
    header: 'Menu Group 1',
    links: [
      {
        id: 1,
        title: 'Group 1 - Link 1',
        path: '/link1',
        icon: ChatIcon,
      },
      {
        id: 2,
        title: 'Group 1 - Link 2',
        path: '/link2',
        icon: CheckIcon,
      },
      {
        id: 3,
        title: 'Group 1 - Link 3,',
        path: '/link3',
        icon: CheckCircleIcon,
      },
    ],
  },
  {
    header: 'Menu Group 2',
    links: [
      {
        id: 4,
        title: 'Group 2 - Link 1',
        path: 'link4',
        icon: DeleteIcon,
      },
      {
        id: 5,
        title: 'Group 2 - Link 2',
        path: 'link5',
        icon: DragHandleIcon,
      },
    ],
  },
  {
    header: 'Menu Group 3',
    links: [
      {
        id: 6,
        title: 'Group 3 - Link 1',
        path: 'link6',
        icon: EditIcon,
      },
      {
        id: 7,
        title: 'Group 3 - Link 2',
        path: 'link7',
        icon: EmailIcon,
      },
      {
        id: 8,
        title: 'Group 3 - Link 3',
        path: 'link8',
        icon: ExternalLinkIcon,
      },
    ],
  },
];

export default sidebarLinks;
