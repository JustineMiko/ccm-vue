<template>
  <div id="app">
    <div>
      <BlogSection 
        title='Cats Crazy Market'
        intro='Découvrez tous les conseils pour les chats et par des chats !'
        :posts="categories"
      />
    </div>

    <div>
      <AboutCard
        title="Pourquoi ce blog ?" 
        description="Avant d'ouvrir ma boutique en ligne d'accessoires pour chats, mes chats testaient déjà plein d'accessoires. Donc ce blog est un retour à mon activité initiale favorite. Vous trouverez ici :"
        line1="Des avis de chats rédigés de façon objective mais avec humour !"
        line2="Des articles de conseils sur les chats car oui en ayant trois chats depuis plusieurs années je commence à m'y connaître un peu !"
        line3="Une sélection de prénoms de chats sous forme d'article annuel pour être en phase avec les tendances du momment."
        conclusion="J'espère que ce blog vous plaira et si vous voulez découvrir mes trois chats testeurs de compétitions, cliquez sur le lien suivant (il sont en photos et sont trop mignons !):"
      />
    </div>

    <div>
      <QuoteCard
        quotedSentence="Je suis belle, je le sais, mais ne vous fiez pas aux apparences... ma passion ? Essayer de détruire tous les jouets que m'achète ma maîtresse !"
        name="Malia"
        role="Princess Crotty"
      />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import BlogSection from '../components/BlogSection'
import AboutCard from '../components/AboutCard.vue'
import QuoteCard from '../components/QuoteCard.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    BlogSection,
    AboutCard,
    QuoteCard,
    FooterComponent
  },
  data: function() {
    return {
      categories: []
    }
  },
  async created() {
    this.categories = await this.getCategories();
  },
  methods: {
    getCategories: async () => {
      const query = `{
        categoryCollection {
          items {
            categoryTitle
            slug
            categoryDescription
            categoryImage {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
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
        return response.data.categoryCollection.items;
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
