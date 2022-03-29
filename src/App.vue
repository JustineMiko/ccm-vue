<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.jpeg">

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
  </div>
</template>

<script>
import BlogSection from './components/BlogSection.vue'
import AboutCard from './components/AboutCard.vue'

export default {
  name: 'App',
  components: {
    BlogSection,
    AboutCard,
  },
  data: function() {
    return {
      items: [
        {
          title: 'Boost your conversion rate',
          href: 'www.google.com',
          category: { name: 'Article', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '6 min',
          author: {
            name: 'Roel Aufderehar',
            href: 'www.google.com',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          title: 'How to use search engine optimization to drive sales',
          href: 'www.google.com',
          category: { name: 'Video', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '4 min',
          author: {
            name: 'Brenna Goyette',
            href: 'www.google.com',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          title: 'Improve your customer experience',
          href: 'www.google.com',
          category: { name: 'Case Study', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          readingTime: '11 min',
          author: {
            name: 'Daniela Metz',
            href: 'www.google.com',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
      ],
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
  margin-top: 60px;
}
</style>
