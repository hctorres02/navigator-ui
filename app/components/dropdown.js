import mixins from "../mixins.js"

export default {
    name: 'Dropdown',
    mixins: mixins,
    props: {
        id: { type: String, required: true },
        isButton: { type: Boolean, default: false },
        direction: { type: String, default: '' }
    },
    template: `
    <div :id="id"
        :class="direction"
        class="dropdown is-right">
        <div class="dropdown-trigger">
            <button v-if="isButton"
                class="button"
                @blur="toggle(id)"
                @focus="toggle(id)">
                <span class="icon">
                    <i class="fa fa-ellipsis-v"></i>
                </span>
            </button>
            <a href="#" v-else
                @focus="toggle(id)"
                @blur="toggle(id)">
                <span class="icon">
                    <i class="fa fa-ellipsis-v"></i>
                </span>
            </a>
            <div class="dropdown-menu has-text-right">
                <div class="dropdown-content">
                    <slot />
                </div>
            </div>
        </div>
    </div>
    `
}