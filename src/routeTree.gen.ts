/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const BookTitleLazyImport = createFileRoute('/book/$title')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const BookTitleLazyRoute = BookTitleLazyImport.update({
  path: '/book/$title',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/book/$title.lazy').then((d) => d.Route))

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
    '/book/$title': {
      id: '/book/$title'
      path: '/book/$title'
      fullPath: '/book/$title'
      preLoaderRoute: typeof BookTitleLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/book/$title': typeof BookTitleLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/book/$title': typeof BookTitleLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/book/$title': typeof BookTitleLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/book/$title'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/book/$title'
  id: '__root__' | '/' | '/book/$title'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  BookTitleLazyRoute: typeof BookTitleLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  BookTitleLazyRoute: BookTitleLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/book/$title"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/book/$title": {
      "filePath": "book/$title.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
