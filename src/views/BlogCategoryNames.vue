<template>
  <div id="app">
    <div>
      <BlogSection 
        title='Idées prénoms'
        intro="Pas d'idée pour le prénom de votre future boule de poils ? On en a pour vous !"
        :posts="namesBlogPosts"
      />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import BlogSection from '../components/BlogSection'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'CatsNames',
  components: {
    BlogSection,
    FooterComponent
  },
  data: function() {
    return {
      namesBlogPosts: []
    }
  },
  async created() {
    this.namesBlogPosts = await this.getNameBlogPosts();
  },
  methods: {
    getCategories: async () => {
      const query = `{
        blogPostCollection {
          items {
            title
            slug
            mainPicture {
              url
            }
            publishedDate
            shortDescription
            catQuote
            parentCategory {
              categoryTitle
            }
          }
        }
      }`;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query
        })
      };
      try {
        const response = await fetch(fetchUrl, fetchOptions).then(result =>
          result.json()
        );
        return response.data.blogPostCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
