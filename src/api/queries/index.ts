import { gql } from 'graphql-request';

export const GET_MAIN = gql`
  query Main {
    landingPages {
      hero {
        description
        bookImage {
          url
          imageDescription
        }
        buttons {
          target
          text
        }
        title {
          html
        }
      }
      introSection {
        title
        sectionID
        stats {
          id
          number
          text
        }
      }
      chaptersSection {
        sectionID
        title
        chapters(first: 15) {
          id
          content
          title
        }
      }
      authorSection {
        sectionID
        name
        description
        expertise
        photo {
          url
          imageDescription
        }
        socials {
          id
          url
          name
          icon {
            url
            imageDescription
          }
        }
      }
      previewSection {
        sectionID
        title
        previews(first: 50) {
          id
          url
          imageDescription
        }
      }
      checkoutSection {
        sectionID
        title
        salePrice
        originalPrice
        image {
          url
          imageDescription
        }
        icons {
          id
          name
          image {
            url
            imageDescription
          }
        }
        button {
          text
          target
        }
      }
      projectSection {
        sectionID
        description
        title
        videoURL
        videoThumbnail {
          imageDescription
          url
        }
      }
      bonusSection {
        sectionID
        title
        bonus: bonuses {
          id
          description
          title
          icon {
            imageDescription
            url
          }
          benefitTitle
          benefits {
            description
            id
          }
        }
      }
      rememberCheckoutSection {
        sectionID
        title {
          html
        }
        buttonText
      }
      faqSection {
        sectionID
        title
        questions {
          id
          title
          content
        }
      }
      footer {
        authorCopyright
      }
    }
  }
`;
