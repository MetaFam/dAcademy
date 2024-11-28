/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const UserIndexLazyImport = createFileRoute('/user/')()
const UploadIndexLazyImport = createFileRoute('/upload/')()
const CurationIndexLazyImport = createFileRoute('/curation/')()
const UserUserLazyImport = createFileRoute('/user/$user')()
const OrgIdIndexLazyImport = createFileRoute('/org/$id/')()
const BookSlugIndexLazyImport = createFileRoute('/book/$slug/')()
const BookSlugChapterIndexLazyImport = createFileRoute(
  '/book/$slug/$chapter/',
)()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UserIndexLazyRoute = UserIndexLazyImport.update({
  id: '/user/',
  path: '/user/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/user/index.lazy').then((d) => d.Route))

const UploadIndexLazyRoute = UploadIndexLazyImport.update({
  id: '/upload/',
  path: '/upload/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/upload/index.lazy').then((d) => d.Route))

const CurationIndexLazyRoute = CurationIndexLazyImport.update({
  id: '/curation/',
  path: '/curation/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/curation/index.lazy').then((d) => d.Route),
)

const UserUserLazyRoute = UserUserLazyImport.update({
  id: '/user/$user',
  path: '/user/$user',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/user/$user.lazy').then((d) => d.Route))

const OrgIdIndexLazyRoute = OrgIdIndexLazyImport.update({
  id: '/org/$id/',
  path: '/org/$id/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/org/$id/index.lazy').then((d) => d.Route))

const BookSlugIndexLazyRoute = BookSlugIndexLazyImport.update({
  id: '/book/$slug/',
  path: '/book/$slug/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/book/$slug/index.lazy').then((d) => d.Route),
)

const BookSlugChapterIndexLazyRoute = BookSlugChapterIndexLazyImport.update({
  id: '/book/$slug/$chapter/',
  path: '/book/$slug/$chapter/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/book/$slug/$chapter/index.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/user/$user': {
      id: '/user/$user'
      path: '/user/$user'
      fullPath: '/user/$user'
      preLoaderRoute: typeof UserUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/curation/': {
      id: '/curation/'
      path: '/curation'
      fullPath: '/curation'
      preLoaderRoute: typeof CurationIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/upload/': {
      id: '/upload/'
      path: '/upload'
      fullPath: '/upload'
      preLoaderRoute: typeof UploadIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/user/': {
      id: '/user/'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/book/$slug/': {
      id: '/book/$slug/'
      path: '/book/$slug'
      fullPath: '/book/$slug'
      preLoaderRoute: typeof BookSlugIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/org/$id/': {
      id: '/org/$id/'
      path: '/org/$id'
      fullPath: '/org/$id'
      preLoaderRoute: typeof OrgIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/book/$slug/$chapter/': {
      id: '/book/$slug/$chapter/'
      path: '/book/$slug/$chapter'
      fullPath: '/book/$slug/$chapter'
      preLoaderRoute: typeof BookSlugChapterIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/user/$user': typeof UserUserLazyRoute
  '/curation': typeof CurationIndexLazyRoute
  '/upload': typeof UploadIndexLazyRoute
  '/user': typeof UserIndexLazyRoute
  '/book/$slug': typeof BookSlugIndexLazyRoute
  '/org/$id': typeof OrgIdIndexLazyRoute
  '/book/$slug/$chapter': typeof BookSlugChapterIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/user/$user': typeof UserUserLazyRoute
  '/curation': typeof CurationIndexLazyRoute
  '/upload': typeof UploadIndexLazyRoute
  '/user': typeof UserIndexLazyRoute
  '/book/$slug': typeof BookSlugIndexLazyRoute
  '/org/$id': typeof OrgIdIndexLazyRoute
  '/book/$slug/$chapter': typeof BookSlugChapterIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/user/$user': typeof UserUserLazyRoute
  '/curation/': typeof CurationIndexLazyRoute
  '/upload/': typeof UploadIndexLazyRoute
  '/user/': typeof UserIndexLazyRoute
  '/book/$slug/': typeof BookSlugIndexLazyRoute
  '/org/$id/': typeof OrgIdIndexLazyRoute
  '/book/$slug/$chapter/': typeof BookSlugChapterIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/user/$user'
    | '/curation'
    | '/upload'
    | '/user'
    | '/book/$slug'
    | '/org/$id'
    | '/book/$slug/$chapter'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/user/$user'
    | '/curation'
    | '/upload'
    | '/user'
    | '/book/$slug'
    | '/org/$id'
    | '/book/$slug/$chapter'
  id:
    | '__root__'
    | '/'
    | '/user/$user'
    | '/curation/'
    | '/upload/'
    | '/user/'
    | '/book/$slug/'
    | '/org/$id/'
    | '/book/$slug/$chapter/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  UserUserLazyRoute: typeof UserUserLazyRoute
  CurationIndexLazyRoute: typeof CurationIndexLazyRoute
  UploadIndexLazyRoute: typeof UploadIndexLazyRoute
  UserIndexLazyRoute: typeof UserIndexLazyRoute
  BookSlugIndexLazyRoute: typeof BookSlugIndexLazyRoute
  OrgIdIndexLazyRoute: typeof OrgIdIndexLazyRoute
  BookSlugChapterIndexLazyRoute: typeof BookSlugChapterIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  UserUserLazyRoute: UserUserLazyRoute,
  CurationIndexLazyRoute: CurationIndexLazyRoute,
  UploadIndexLazyRoute: UploadIndexLazyRoute,
  UserIndexLazyRoute: UserIndexLazyRoute,
  BookSlugIndexLazyRoute: BookSlugIndexLazyRoute,
  OrgIdIndexLazyRoute: OrgIdIndexLazyRoute,
  BookSlugChapterIndexLazyRoute: BookSlugChapterIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/user/$user",
        "/curation/",
        "/upload/",
        "/user/",
        "/book/$slug/",
        "/org/$id/",
        "/book/$slug/$chapter/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/user/$user": {
      "filePath": "user/$user.lazy.tsx"
    },
    "/curation/": {
      "filePath": "curation/index.lazy.tsx"
    },
    "/upload/": {
      "filePath": "upload/index.lazy.tsx"
    },
    "/user/": {
      "filePath": "user/index.lazy.tsx"
    },
    "/book/$slug/": {
      "filePath": "book/$slug/index.lazy.tsx"
    },
    "/org/$id/": {
      "filePath": "org/$id/index.lazy.tsx"
    },
    "/book/$slug/$chapter/": {
      "filePath": "book/$slug/$chapter/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
