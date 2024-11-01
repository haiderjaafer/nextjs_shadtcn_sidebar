import {
    AlbumIcon,
    DiscAlbum,
    FolderIcon,
    HeartIcon,
    HistoryIcon,
    LayoutDashboardIcon,
    LibraryIcon,
    ListMusicIcon,
    MicIcon,
    PlayCircleIcon,
    RadioIcon,
    SquarePlusIcon,
    Volume1Icon,
    ZapIcon,
  } from "lucide-react";
  
  export const data = {
    app: {
      name: "نظام المواد الاحصائية",
      logo: "/logo.svg",
      version: "1.0.0",
    },
    user: {
      name: "John Doe",
      email: "johndoe@example.com",
      avatar: "/user.jpg",
    },
    navMain: [
      {
        title: "الاضافة",
        icon: LayoutDashboardIcon,
        url: "#",
        isActive: true,
        items: [
          {
            title: "اضافة",
            icon: ZapIcon,
            url: "/add",
          },
          {
            title: "بحث",
            icon: Volume1Icon,
            url: "/search",
          },
          {
            title: "تعديل",
            icon: DiscAlbum,
            url: "#",
          },
          {
            title: "حذف",
            icon: MicIcon,
            url: "#",
          },
          {
            title: "بحث بين تاريخين",
            icon: RadioIcon,
            url: "#",
          },
        ],
      },
      {
        title: "التقارير",
        icon: LibraryIcon,
        url: "#",
        isActive: true,
        items: [
          {
            title: "تقرير الاعداد",
            url: "#",
            icon: HistoryIcon,
          },
          {
            title: "تقرير الاحصاءيات",
            url: "#",
            icon: AlbumIcon,
          },
          {
            title: "تقرير المواد الكيماوية",
            url: "#",
            icon: HeartIcon,
          },
          {
            title: "تقرير الموجودات",
            url: "#",
            icon: FolderIcon,
          },
        ],
      },
      {
        title: "البحث والاحصاء والمعدل",
        icon: ListMusicIcon,
        url: "#",
        isActive: true,
        items: [
          {
            title: "عمل بحث جديد",
            url: "#",
            icon: SquarePlusIcon,
          },
          {
            title: "عمل احصاء جديد",
            url: "#",
            icon: PlayCircleIcon,
          },
          {
            title: "اضافة الى احصاء موجود",
            url: "#",
            icon: PlayCircleIcon,
          },
          {
            title: "بحث بالاعداد الموجودة",
            url: "#",
            icon: PlayCircleIcon,
          },
        ],
      },
    ],
  };
  
  export const artists = [
    {
      id: 1,
      name: "Eminem",
      plays: "523M Plays",
      image: "/artists/eminem.jpg",
    },
    {
      id: 2,
      name: "Justin Bieber",
      plays: "647M Plays",
      image: "/artists/jb.jpg",
    },
    {
      id: 3,
      name: "Ariana Grande",
      plays: "731M Plays",
      image: "/artists/ariana.jpg",
    },
    {
      id: 4,
      name: "Sabrina Carpenter",
      plays: "320M Plays",
      image: "/artists/sabrina.jpg",
    },
    {
      id: 5,
      name: "Taylor Swift",
      plays: "980M Plays",
      image: "/artists/taylor.jpg",
    },
    {
      id: 6,
      name: "The Weeknd",
      plays: "850M Plays",
      image: "/artists/weekend.jpg",
    },
  ];
  
  export const genres = [
    {
      id: 1,
      genre: "Dance Beat",
      color: "#476a8a",
    },
    {
      id: 2,
      genre: "Electro Pop",
      color: "#a69984",
    },
    {
      id: 3,
      genre: "Alternative Indie",
      color: "#a24c34",
    },
    {
      id: 4,
      genre: "Hip Hop",
      color: "#0d4045",
    },
    {
      id: 5,
      genre: "Classical Period",
      color: "#a67894",
    },
    {
      id: 6,
      genre: "KPOP",
      color: "#5547a5",
    },
    {
      id: 7,
      genre: "Rock",
      color: "#4a4a4a",
    },
    {
      id: 8,
      genre: "Jazz",
      color: "#a5a554",
    },
  ];
  
  export const topCharts = [
    {
      id: 1,
      title: "Espresso",
      artist: "Sabrina Carpenter",
      duration: "2:55",
      image: "/albums/espresso.jpg",
    },
    {
      id: 2,
      title: "Golden Hour",
      artist: "JVKE",
      duration: "3:29",
      image: "/albums/golden_hour.jpg",
    },
    {
      id: 3,
      title: "Flowers",
      artist: "Miley Cyrus",
      duration: "3:21",
      image: "/albums/flowers.jpg",
    },
    {
      id: 4,
      title: "As It Was",
      artist: "Harry Styles",
      duration: "2:47",
      image: "/albums/as_it_was.jpg",
    },
    {
      id: 5,
      title: "Flower",
      artist: "JISOO",
      duration: "3:47",
      image: "/albums/flower.jpg",
    },
  ];