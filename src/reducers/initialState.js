let initialState = {
  sidebar: {
    showFilter: 'SHOW_MAINBOARD',
    searchText: '',
    pageItems: [
      {
        id: 1,
        label: "Dashboard",
        icon: "fas fa-hashtag",
        iconSize: "fa-1x",
        pageListItemClass: "page-item-dashboard",
        path: "/",
        hasDropdown: false,
      },
      {
        id: 2,
        label: "Mailbox",
        icon: "far fa-envelope",
        iconSize: "fa-1x",
        pageListItemClass: "page-item-mailbox",
        path: "/mailbox",
        hasDropdown: true,
        dropdownItems: [
          {
            id: 21,
            label: "Inbox",
            icon: "fas fa-inbox",
            iconSize: "fa-1x",
            pageListItemClass: "page-item-mailbox-inbox",
            path: "/mailbox/inbox",
            hasDropdown: false,
          },
          {
            id: 22,
            label: "Mail",
            icon: "far fa-envelope-open",
            iconSize: "fa-1x",
            pageListItemClass: "page-item-mailbox-mail",
            path: "/mailbox/mail",
            hasDropdown: false,
          },
          {
            id: 23,
            label: "Compose",
            icon: "far fa-edit",
            iconSize: "fa-1x",
            pageListItemClass: "page-item-mailbox-compose",
            path: "/mailbox/compose",
            hasDropdown: false,
          }
        ]
      },
      {
        id: 3,
        label: "Gallery",
        icon: "far fa-images",
        iconSize: "fa-1x",
        pageListItemClass: "page-item-gallery",
        path: "/gallery",
        hasDropdown: false,
      },
      {
        id: 4,
        label: "Social",
        icon: "fas fa-link",
        iconSize: "fa-1x",
        pageListItemClass: "page-item-social",
        path: "/social",
        hasDropdown: false,
      },
      {
        id: 5,
        label: "Blog",
        icon: "far fa-newspaper",
        iconSize: "fa-1x",
        pageListItemClass: "page-item-blog",
        path: "/blog",
        hasDropdown: true,
        dropdownItems: [
          {
            id: 51,
            label: "Posts",
            icon: "fas fa-list-alt",
            iconSize: "fa-1x",
            pageListItemClass: "page-item-blog-posts",
            path: "/blog/posts",
            hasDropdown: false,
          },
          {
            id: 52,
            label: "Single Posts",
            icon: "far fa-file-alt",
            iconSize: "fa-1x",
            pageListItemClass: "page-item-blog-single-pots",
            path: "/blog/post",
            hasDropdown: false,
          }
        ]          
      }
    ],
    users: []
  }
};

export default initialState;