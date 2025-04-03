/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/CameraView` | `/CameraView`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/GalleryView` | `/GalleryView`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/PhotoView` | `/PhotoView`; params?: Router.UnknownInputParams; } | { pathname: `/context/PhotoContext`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/CameraView` | `/CameraView`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/GalleryView` | `/GalleryView`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/PhotoView` | `/PhotoView`; params?: Router.UnknownOutputParams; } | { pathname: `/context/PhotoContext`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/CameraView${`?${string}` | `#${string}` | ''}` | `/CameraView${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/GalleryView${`?${string}` | `#${string}` | ''}` | `/GalleryView${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/PhotoView${`?${string}` | `#${string}` | ''}` | `/PhotoView${`?${string}` | `#${string}` | ''}` | `/context/PhotoContext${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/CameraView` | `/CameraView`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/GalleryView` | `/GalleryView`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/PhotoView` | `/PhotoView`; params?: Router.UnknownInputParams; } | { pathname: `/context/PhotoContext`; params?: Router.UnknownInputParams; };
    }
  }
}
