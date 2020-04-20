import AbstractComponent from "./abstract-component.js";

const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class SiteMenu extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate();
  }
}
