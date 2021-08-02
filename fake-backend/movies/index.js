module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const response = [
        {
          "id": "tt3778644",
          "title": "Solo: A Star Wars Story"
        },
        {
          "id": "tt3748528",
          "title": "Rogue One: A Star Wars Story"
        },
        {
          "id": "tt0120915",
          "title": "Star Wars: Episode I - The Phantom Menace"
        },
        {
          "id": "tt0121765",
          "title": "Star Wars: Episode II - Attack of the Clones"
        },
        {
          "id": "tt0121766",
          "title": "Star Wars: Episode III - Revenge of the Sith"
        },
        {
          "id": "tt0076759",
          "title": "Star Wars: Episode IV - A New Hope"
        },
        {
          "id": "tt2527338",
          "title": "Star Wars: Episode IX - The Rise of Skywalker"
        },
        {
          "id": "tt0080684",
          "title": "Star Wars: Episode V - The Empire Strikes Back"
        },
        {
          "id": "tt0086190",
          "title": "Star Wars: Episode VI - Return of the Jedi"
        },
        {
          "id": "tt2488496",
          "title": "Star Wars: Episode VII - The Force Awakens"
        },
        {
          "id": "tt2527336",
          "title": "Star Wars: Episode VIII - The Last Jedi"
        },
        {
          "id": "tt0193524",
          "title": "The Star Wars Holiday Special"
        }];
    const responseMessage = JSON.stringify(response);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
        headers: {
            'Content-Type': 'application/json'
        }
    };

}