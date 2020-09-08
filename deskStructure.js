import S from "@sanity/desk-tool/structure-builder";

// ICONS
import Article from "react-icons/lib/md/note"
import Avatar from "react-icons/lib/md/image"
import Home from "react-icons/lib/md/home"
import Stars from "react-icons/lib/md/stars"
import Account from "react-icons/lib/md/account-circle"
import Map from "react-icons/lib/md/map"
import Settings from "react-icons/lib/md/settings"
import Collections from "react-icons/lib/md/collections"

export default () =>
    S.list()
        .title("TSoaP")
        .items([
            S.listItem()
                .title('Case Studies')
                .icon(Home)
                .child(
                    S.documentList()
                        .title('Case Studies')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'caseStudy' })),
            S.listItem()
                .title('Events')
                .icon(Stars)
                .child(
                    S.documentList()
                        .title('Events')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'event' })),
            S.listItem()
                .title('Participants')
                .icon(Account)
                .child(
                    S.documentList()
                        .title('Participants')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'participant' })),
            S.listItem()
                .title('Pages')
                .icon(Article)
                .child(
                    S.documentList()
                        .title('Pages')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'page' })),
            S.divider(),
            S.listItem()
                .title('Graphics')
                .icon(Collections)
                .child(
                    S.list()
                        .title("Graphics")
                        .items([
                            S.listItem()
                                .title('Avatars')
                                .icon(Avatar)
                                .child(
                                    S.documentList()
                                        .title('Avatars')
                                        .showIcons(true)
                                        .filter('_type == $type')
                                        .params({ type: 'avatar' })),
                            S.listItem()
                                .title('Case Study Sprites')
                                .icon(Home)
                                .child(
                                    S.documentList()
                                        .title('Case Study Sprites')
                                        .showIcons(true)
                                        .filter('_type == $type')
                                        .params({ type: 'caseStudySprite' })),
                            S.listItem()
                                .title('Maps')
                                .icon(Map)
                                .child(
                                    S.documentList()
                                        .title('Maps')
                                        .showIcons(true)
                                        .filter('_type == $type')
                                        .params({ type: 'gfxMap' })),
                            S.listItem()
                                .title("Graphics settings")
                                .icon(Settings)
                                .child(
                                    S.editor()
                                        .id('config')
                                        .schemaType("graphicsSettings")
                                        .documentId("graphics-settings")
                                ),
                        ]),
                ),
        ]);