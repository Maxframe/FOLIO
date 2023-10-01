import { CogIcon } from "@sanity/icons";
import { UserIcon } from "@sanity/icons";
import { BlockElementIcon } from "@sanity/icons";
import { PresentationIcon } from "@sanity/icons";
import { SparklesIcon } from "@sanity/icons";

export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["hero", "about", "projectsSection", "ui"].includes(listItem.getId())
      ),
      S.listItem()
        .title("Page")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Page Settings")
            .items([
              S.listItem()
                .title("Hero")
                .icon(BlockElementIcon)
                .child(S.document().schemaType("hero").documentId("hero")),
              S.listItem()
                .title("Featured Projects")
                .icon(PresentationIcon)
                .child(
                  S.document()
                    .schemaType("projectsSection")
                    .documentId("projectsSection")
                ),
              S.listItem()
                .title("About")
                .icon(UserIcon)
                .child(S.document().schemaType("about").documentId("about")),
              S.divider(),
              S.listItem()
                .title("UI")
                .icon(SparklesIcon)
                .child(S.document().schemaType("ui").documentId("ui")),
            ])
        ),
    ]);
