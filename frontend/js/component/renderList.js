import { workoutTemplate } from "./workout-item.js";

export function renderList(containerId, items, itemTemplateCallback) {
    const listContainer = document.getElementById(containerId);

    listContainer.innerHTML = ""

    items.forEach(item => {
        listContainer.innerHTML += itemTemplateCallback(item);
    });
}