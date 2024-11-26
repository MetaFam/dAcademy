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

const UploadLazyImport = createFileRoute('/upload')()
const ProfileLazyImport = createFileRoute('/profile')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UploadLazyRoute = UploadLazyImport.update({
  id: '/upload',
  path: '/upload',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/upload.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

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
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/upload': {
      id: '/upload'
      path: '/upload'
      fullPath: '/upload'
      preLoaderRoute: typeof UploadLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/upload': typeof UploadLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/upload': typeof UploadLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/upload': typeof UploadLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/profile' | '/upload'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/profile' | '/upload'
  id: '__root__' | '/' | '/profile' | '/upload'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  UploadLazyRoute: typeof UploadLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  UploadLazyRoute: UploadLazyRoute,
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
        "/profile",
        "/upload"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/profile": {
      "filePath": "profile.lazy.tsx"
    },
    "/upload": {
      "filePath": "upload.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
