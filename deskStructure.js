import S from "@sanity/desk-tool/structure-builder";

// ICONS
import Article from "react-icons/lib/md/note"
import Collection from "react-icons/lib/md/collections-bookmark"
import Book from "react-icons/lib/md/library-books"
import Home from "react-icons/lib/md/home"
import Stars from "react-icons/lib/md/stars"
import Account from "react-icons/lib/md/account-circle"
import Verified from "react-icons/lib/md/visibility"
import Email from "react-icons/lib/md/email"
import Bottom from "react-icons/lib/md/vertical-align-bottom"

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
                        .params({ type: 'page' }))
        ]);