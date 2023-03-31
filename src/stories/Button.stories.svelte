<script lang="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button from "../lib/components/Button.svelte";
</script>

<Meta
    title="Button"
    component={Button}
    argTypes={{
        label: { control: "text" },
        round: { control: "boolean" },
        block: { control: "boolean" },
        text: { control: "boolean" },
        type: {
            control: {
                type: "select",
                options: ["default", "primary", "secondary", "danger"],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["s", "m", "l"],
            },
        },
        justify: {
            control: {
                type: "select",
                options: ["", "flex-start", "center", "flex-end"],
            },
        },
        tag: {
            control: {
                type: "select",
                options: ["button", "a"],
            },
        },
    }}
/>

<Template let:args>
    <Button {...args} on:click={args.onClick} />
</Template>

<Story name="Primary" args={{ primary: true, label: "Primary" }} />
<Story name="Secondary" args={{ label: "Secondary" }} />
<Story name="Large" args={{ size: "l", label: "Large" }} />
<Story name="Small" args={{ size: "sm", label: "Large" }} />
