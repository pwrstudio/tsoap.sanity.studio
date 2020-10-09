import S from "@sanity/desk-tool/structure-builder"

// ICONS
import {
  MdGamepad,
  MdCast,
  MdViewAgenda,
  MdAudioTrack,
  MdShoppingBasket,
  MdMyLocation,
  MdCollections,
  MdSettings,
  MdMap,
  MdAccountCircle,
  MdSms,
  MdEvent,
  MdHome,
  MdImage,
  MdNote,
} from "react-icons/md"

export default () =>
  S.list()
    .title("TSoaP")
    .items([
      S.listItem()
        .title("Active streams")
        .icon(MdCast)
        .child(
          S.editor()
            .id("active-streams")
            .title("Active streams")
            .schemaType("activeStreams")
            .documentId("active-streams")
        ),
      S.divider(),
      S.listItem()
        .title("Case Studies (Emergent)")
        .icon(MdShoppingBasket)
        .child(
          S.documentList()
            .title("Case Studies (Emergent)")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "caseStudyEmergent" })
        ),
      S.listItem()
        .title("Case Studies (Exhibition)")
        .icon(MdHome)
        .child(
          S.documentList()
            .title("Case Studies (Exhibition)")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "caseStudyExhibition" })
        ),
      S.listItem()
        .title("Audio Installations")
        .icon(MdAudioTrack)
        .child(
          S.documentList()
            .title("Audio Installations")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "audioInstallation" })
        ),
      S.listItem()
        .title("Events")
        .icon(MdEvent)
        .child(
          S.documentList()
            .title("Events")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "event" })
        ),
      S.listItem()
        .title("Seminars")
        .icon(MdSms)
        .child(
          S.documentList()
            .title("Seminars")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "seminar" })
        ),
      S.listItem()
        .title("Participants")
        .icon(MdAccountCircle)
        .child(
          S.documentList()
            .title("Participants")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "participant" })
        ),
      S.listItem()
        .title("Welcome card")
        .icon(MdViewAgenda)
        .child(
          S.editor()
            .id("welcome-card")
            .title("Welcome card")
            .schemaType("page")
            .documentId("welcome-card")
        ),
      S.listItem()
        .title("Pages")
        .icon(MdNote)
        .child(
          S.documentList()
            .title("Pages")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "page" })
        ),
      S.divider(),
      S.listItem()
        .title("Graphics")
        .icon(MdCollections)
        .child(
          S.list()
            .title("Graphics")
            .items([
              S.listItem()
                .title("Avatars")
                .icon(MdImage)
                .child(
                  S.documentList()
                    .title("Avatars")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "avatar" })
                ),
              S.listItem()
                .title("Case Study Sprites")
                .icon(MdHome)
                .child(
                  S.documentList()
                    .title("Case Study Sprites")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "caseStudySprite" })
                ),
              S.listItem()
                .title("Maps")
                .icon(MdMap)
                .child(
                  S.documentList()
                    .title("Maps")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "gfxMap" })
                ),
              S.listItem()
                .title("Landmarks")
                .icon(MdMyLocation)
                .child(
                  S.documentList()
                    .title("Landmarks")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "landmark" })
                ),
              S.listItem()
                .title("NPCs")
                .icon(MdGamepad)
                .child(
                  S.documentList()
                    .title("NPCs")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "npc" })
                ),
              S.listItem()
                .title("Graphics settings")
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id("config")
                    .title("Graphics settings")
                    .schemaType("graphicsSettings")
                    .documentId("graphics-settings")
                ),
            ])
        ),
    ])
