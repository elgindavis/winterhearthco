
describe('Home page checks', () => {
    it('Checks the navbar links', () => {
        cy.visit('/');
        cy.get("a[name=navbar-link-home]")
          .should("have.attr", "href")
          .and("include", "/");

        cy.get('a[name=navbar-link-story]')
          .should("have.attr", "href")
          .and("include", "/about");

        cy.get('a[name=navbar-link-blog]')
          .should("have.attr", "href")
          .and("include", "/blog");

        cy.get('a[name=navbar-link-newsletters]')
          .should("have.attr", "href")
          .and("include", "/newsletters");

        cy.contains("Winter Hearth Studios");
    });
        
    it('Checks the page buttons', () => {
        cy.get("a[name=see-all-blogs-button]")
          .should("have.attr", "href")
          .and("include", "/blog");

        cy.get("a[name=see-all-newsletters-button]")
          .should("have.attr", "href")
          .and("include", "/newsletters");

        cy.get(".secondary-btn").first().click();
        cy.url().should("not.equal", Cypress.env("baseUrl") + "/");
        cy.contains("Popular Posts");
        cy.visit("/")
    });
    
    it('Can filter posts using search bar on homepage', () => {
        checkSearch();
    });
    it('Renders the logo', () => {
        cy.get("img[name=navbar-logo-image]")
    });
    
});

describe('About Page checks', () => {
    it('Renders Our Story paragraphs', () => {
        cy.visit("/about");
        cy.contains("Our Story");
        cy.contains("Hey there!");
        cy.contains("Our Mission");
        cy.contains("What fuels us");
        cy.contains("What we do");
        
        cy.get("img[name=elgin-story-image]");
        cy.get("img[name=hi-5-image]");
        cy.get("img[name=aubbie-knight-image]");
        cy.get("img[name=aubbie-writing-image]");

        cy.get("a[name=see-latest-posts-button]").click();
        cy.url().should("not.include", "about/")
    });
});

describe('Blog page checks', () => {
    it("Can filter posts using search bar on blog page", () => {
        checkSearch();
    });

    it('Has link to newsletters', () => {
        cy.contains("Archives");

        cy.get("a[name=see-all-newsletters-button]")
          .should("have.attr", "href")
          .and("include", "/newsletters");

        cy.get(".secondary-btn").first().click();
        cy.visit("/blog/")
    });   

    it('Renders popular post column', () => {
        cy.get("div[name=popular-post-column]");
        cy.contains("Popular Posts");
    });
})

describe('Newsletter page checks', () => {
    it("Renders newsletters page", () => {
        cy.visit("/newsletters");
        cy.url().should("include", "/newsletters");
        cy.contains("Epic Life Playbook Volume 2");
        cy.contains("Epic Life Playbook Volume 1");
        cy.contains("By Elgin Davis");
    })

    it("Can filter posts using search bar on newsletter page", () => {
        checkSearch();
    });

    it('Has link to newsletters', () => {
        cy.get(".secondary-btn").first().click();
        cy.url().should("include", "volume-2/");
        cy.visit("/newsletters/")
        
        cy.get(".secondary-btn").last().click();
        cy.url().should("include", "volume-1/");
        cy.visit("/newsletters/");
    });   
});

    // it('', () => {});


const checkSearch = () => {
    cy.get("input[name=search-input]").as("search-input").type("hypothalamus");

    cy.contains("Results for: hypothalamus");
    cy.contains("No posts matched this search");

    cy.get("@search-input").clear().type("elgin");
    cy.get("div[name=searched-post-section]").contains("By Elgin Davis");
    cy.get("@search-input").clear();
}