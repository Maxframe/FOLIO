import { CogIcon } from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !["hero", "about", "ui"].includes(listItem.getId())
      ),
      S.listItem()
        .title("Page")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Page Settings")
            .items([
              S.listItem()
                .title("Hero Section")
                .child(S.document().schemaType("hero").documentId("hero")),
              S.listItem()
                .title("About Section")
                .child(S.document().schemaType("about").documentId("about")),
              S.listItem()
                .title("UI")
                .child(S.document().schemaType("ui").documentId("ui")),
            ])
        ),
    ]);
