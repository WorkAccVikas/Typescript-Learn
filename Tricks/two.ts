type RouteConfig = {
  path: string;
  auth: boolean;
};

// POINT : as const
const routes = {
  home: {
    path: '/',
    auth: false,
  },
  dashboard: {
    path: '/dashboard',
    auth: true,
  },
  payment: {
    path: '/payment',
  },
} as const;
routes.home.path = '/abc';

// POINT: as satisfies
const routes1 = {
  home: {
    path: '/',
    auth: false,
  },
  dashboard: {
    path: '/dashboard',
    auth: true,
  },
  payment: {
    path: '/payment',
  },
} satisfies Record<string, RouteConfig>;

routes1.home.path = '/abc';

// POINT: as const & satisfies
const routes2 = {
  home: {
    path: '/',
    auth: false,
  },
  dashboard: {
    path: '/dashboard',
    auth: true,
  },
  payment: {
    path: '/payment',
  },
} as const satisfies Record<string, RouteConfig>;

routes2.home.path = '/abc';

export {};
