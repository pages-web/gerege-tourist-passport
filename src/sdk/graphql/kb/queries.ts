import { gql } from "@apollo/client";

const articleDetail = gql`
  query kbArticleDetail($id: String!) {
    knowledgeBaseArticleDetail(_id: $id) {
      _id
      content
      modifiedDate
      title
      summary
      image {
        url
      }
      attachments {
        url
        type
      }
      createdUser {
        _id
        username
        email
        details {
          avatar
          fullName
        }
      }
    }
  }
`;

const articles = gql`
  query Articles(
    $page: Int
    $perPage: Int
    $codes: [String]
    $categoryIds: [String]
  ) {
    knowledgeBaseArticles(
      page: $page
      perPage: $perPage
      codes: $codes
      categoryIds: $categoryIds
    ) {
      _id
      summary
      title
      content
      image {
        url
      }
      attachments {
        url
      }
      modifiedDate
    }
  }
`;

const kbCategory = gql`
  query knowledgeBaseCategoryDetail($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
      title
      description
      articles {
        _id
        content
        modifiedDate
        title
        summary
        status
        reactionChoices
        categoryId
        image {
          url
        }
        attachments {
          url
          type
        }
        createdUser {
          _id
          username
          email
          details {
            avatar
            fullName
          }
        }
      }
    }
  }
`;

const kbCategoryId = gql`
  query knowledgeBaseCategoryId($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
    }
  }
`;

// const kbTopicDetail = gql`
//   query knowledgeBaseTopicDetail($_id: String!) {
//     clientPortalKnowledgeBaseTopicDetail(_id: $_id) {
//       _id
//       title
//       description
//       color
//       backgroundImage
//       languageCode
//       categories {
//         _id
//         title
//         description
//         icon
//         numOfArticles
//         authors {
//           _id
//           details {
//             fullName
//             avatar
//           }
//         }
//       }
//       parentCategories {
//         _id
//         title
//         description
//         icon
//         numOfArticles
//         authors {
//           _id
//           details {
//             fullName
//             avatar
//           }
//         }
//         childrens {
//           _id
//           title
//           description
//           icon
//           numOfArticles
//           authors {
//             _id
//             details {
//               fullName
//               avatar
//             }
//           }
//         }
//         articles {
//           _id
//           title
//         }
//       }
//     }
//   }
// `;

const queries = {
  articleDetail,
  articles,
  kbCategory,
  kbCategoryId,
  // kbTopicDetail,
};

export default queries;
