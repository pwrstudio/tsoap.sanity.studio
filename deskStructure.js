import S from "@sanity/desk-tool/structure-builder"

// ICONS
import Article from "react-icons/lib/md/note"
import Avatar from "react-icons/lib/md/image"
import Home from "react-icons/lib/md/home"
import Event from "react-icons/lib/md/event"
import SMS from "react-icons/lib/md/sms"
import Account from "react-icons/lib/md/account-circle"
import Map from "react-icons/lib/md/map"
import Settings from "react-icons/lib/md/settings"
import Collections from "react-icons/lib/md/collections"
import Location from "react-icons/lib/md/my-location"
import Basket from "react-icons/lib/md/shopping-basket"
import Audio from "react-icons/lib/md/audiotrack"
import Card from "react-icons/lib/md/view-agenda"

export default () =>
  S.list()
    .title("TSoaP")
    .items([
      S.listItem()
        .title("Case Studies (Emergent)")
        .icon(Basket)
        .child(
          S.documentList()
            .title("Case Studies (Emergent)")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "caseStudyEmergent" })
        ),
      S.listItem()
        .title("Case Studies (Exhibition)")
        .icon(Home)
        .child(
          S.documentList()
            .title("Case Studies (Exhibition)")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "caseStudyExhibition" })
        ),
      S.listItem()
        .title("Audio Installations")
        .icon(Audio)
        .child(
          S.documentList()
            .title("Audio Installations")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "audioInstallation" })
        ),
      S.listItem()
        .title("Events")
        .icon(Event)
        .child(
          S.documentList()
            .title("Events")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "event" })
        ),
      S.listItem()
        .title("Seminars")
        .icon(SMS)
        .child(
          S.documentList()
            .title("Seminars")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "seminar" })
        ),
      S.listItem()
        .title("Participants")
        .icon(Account)
        .child(
          S.documentList()
            .title("Participants")
            .showIcons(true)
            .filter("_type == $type")
            .params({ type: "participant" })
        ),
      S.listItem()
        .title("Welcome card")
        .icon(Card)
        .child(
          S.editor()
            .id("welcome-card")
            .schemaType("page")
            .documentId("welcome-card")
        ),
      S.listItem()
        .title("Pages")
        .icon(Article)
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
        .icon(Collections)
        .child(
          S.list()
            .title("Graphics")
            .items([
              S.listItem()
                .title("Avatars")
                .icon(Avatar)
                .child(
                  S.documentList()
                    .title("Avatars")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "avatar" })
                ),
              S.listItem()
                .title("Case Study Sprites")
                .icon(Home)
                .child(
                  S.documentList()
                    .title("Case Study Sprites")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "caseStudySprite" })
                ),
              S.listItem()
                .title("Maps")
                .icon(Map)
                .child(
                  S.documentList()
                    .title("Maps")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "gfxMap" })
                ),
              S.listItem()
                .title("Landmarks")
                .icon(Location)
                .child(
                  S.documentList()
                    .title("Landmarks")
                    .showIcons(true)
                    .filter("_type == $type")
                    .params({ type: "landmark" })
                ),
              S.listItem()
                .title("Graphics settings")
                .icon(Settings)
                .child(
                  S.editor()
                    .id("config")
                    .schemaType("graphicsSettings")
                    .documentId("graphics-settings")
                ),
            ])
        ),
    ])
