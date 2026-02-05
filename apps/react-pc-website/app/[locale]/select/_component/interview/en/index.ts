import InterviewEnMDX from './interview.en.mdx';
export { InterviewEnMDX };
export * from './enCatalog';

{
  /* ## What You Will Gain

Every component in this library has been meticulously crafted through in-depth research into the source code of multiple mainstream open-source component libraries and years of practical refinement. It boasts exceptionally high code quality and engineering practicality among similar tutorials (discussions are welcome, and comparisons are encouraged). All components are suitable for enterprise-level production environments and can also serve as standout projects for interviews for mid-to-senior front-end positions.

By mastering this technical solution, you will gain the following capabilities in the "Front-end Component Library Expert Training Camp":

- Independently implement an Anchor component with functionality and user experience on par with well-known open-source component libraries (such as Ant Design, Base-ui, Shadcn/ui).

- Transform this project into a technical highlight during interviews, clearly demonstrating your design thinking and implementation skills.

## Technical Challenges

- How to design a highly extensible Anchor component architecture?

  - or example, allowing users to fully customize Anchor.Link without relying on the default implementation provided by @t-headless-ui/react.

- How to simultaneously support scrolling to the window and any DOM container?

  - Implement a unified abstract and compatibility layer for different scrolling environments.

- How to handle the "race condition" problem during scrolling?

  - For example, when a user clicks "Heading C," the page smoothly scrolls to it. While passing through "Heading A" and "Heading B," the scroll event listener might incorrectly trigger highlight switches, causing the navigation state to "jump around."

- How to optimize the frequency of scroll event triggers to avoid performance losses?

  - For example, use requestAnimationFrame to optimize scroll animations and avoid frequent scroll event triggers.

- How to support automatically scrolling to the position corresponding to the URL hash after the page loads?

  - For example, listen to the DOMContentLoaded event and scroll to the target position based on the URL hash after the page loads.

- When multiple headings appear within the viewport simultaneously, how to accurately determine the currently active item?

  - For example, using IntersectionObserver to monitor whether heading elements enter the viewport, thereby accurately determining the currently active item.

- How to ensure the onChange event is stable when the active heading changes?

  - For example, using Promise to ensure that the state update is complete before triggering the callback function in the onChange event.

## Welcome to Join

Finally, we sincerely invite you to join the "Front-end Component Library Expert Training Camp." Let's delve into the world of component development together, learn collaboratively, and grow continuously. */
}
