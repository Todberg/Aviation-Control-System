# Aviation Control System (ACS) Assignment
This is a first draft implementation of the *Aviation Control System assignment*. The project is created under a fairly short period of time as it is part of a programming assignment. Shortcuts and relatively quick decisions were made without thorough research. As a consequence it should only be perceived as a rough starting point (or draft) and *not* as production ready code. The implementation is not pixel perfect with respect to the underlying Figma designs, but this can easily be tweaked.

Sidebar Expanded           |  Sidebar Collapsed
:-------------------------:|:-------------------------:
<img src="https://user-images.githubusercontent.com/2377380/183299391-e940e62e-3314-439c-bb83-4187c28ae4d6.png" width="300"> |  <img src="https://user-images.githubusercontent.com/2377380/183299387-44c18368-cf6d-437c-a483-671def977ab2.png" width="300">

## Implementation Details
- The `oxygen` folder acts as an imitation of a design system package.
- Uses `rem` units throughout for better scaling.
- Supports both `ltr` and `rtl` directions for internationalization.
- The global stylesheets are organized according to the [7-1 architecture](https://sass-guidelin.es/#architecture). Currently most of the files are empty, however, that might change in the future as more application specific styles are being added.
- The folder structure is divided into feature modules in order to make it more scalable.
    - The `shared` and `core` modules contain shared functionality across the application.
- We take advantage of codesplitting for every menu-based route as the contents may grow.

## Thoughts 
- `Tokens`: These needs to be auto-generated by tooling. This can be done with [Style Dictionary](https://amzn.github.io/style-dictionary) or some other tool out there.
    - Besides `css`/`scss` files, tokens should also be built for other means of consumptions e.g. `JavaScript`/`TypeScript`. For example:
    ```tsx
    import { color, spacing } from 'oxygen';

    const Component = (): JSX.Element => {
        return (
            <FlexBox justifyContent="center" gap={spacing[200]}>
                ...
            </FlexBox>
        );
    }
    ```
- `Iconography`: Currently there is a single `IconComponent` that accepts an icon name. This is probably not the most scalable solution (*not tree shakable*) as it would require every possible SVG to be injected into the hosting DOM with `<symbol>` and then referenced with `<use>` An alternative solution might be to auto-generate a component for the every SVG. The consumption would then be something like `<oxygen-icon-right-arrow />` and `<oxygen-icon-left-arrow>`. This also makes it AOT compliant.

- `Sidebar`: The sidebar functionality can potentially be made into a reusable component that lives inside the design system. This would make sense if this kind of layout is common across applications.

- `Styling`: In terms creating reusable styles a good approach might be to create lots of global utility classes as explained in this [article](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/). This basically allows you to write components without the associated stylesheet (to a certain extent) as you are relying on globally available helper classes. For example `flex-column` or `text-body-s`.