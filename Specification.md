# Fone Dynamics Front End Exercise

You've just started your job at Fone Dynamics and you've been tasked with your first deliverable! Vincenzo El Salvadore from the sales team has been nagging us to come up a new and neat way for customers to quickly navigate between their various Properties within the Portal system. 

## What's the task?

You need to build a UI "component" that displays a list of **Client Accounts** (specifically the `AccountName`) and the corressponding Properties (specifically `PropertyName`) for each. 

It's up to you on how the component is designed visually and how it functions, but the Vincenzo team has asked for it to be as funky (and quick) as possible. Vincenzo has also asked us to implement some sort of searching / filtering capability which would allow customers to quickly locate a Property or Account - this is *pretty important*, apparently!

### Example UI

As an example, Vincenzo has provided the following example of a potential UI. The UI shows the Accounts in one column, and the Properties for the currently selected Account in the second column. In this case, the **first item** in the Accounts list has been "selected", and all the Properties for that item have been loaded into the second column.

Remember, it doesn't have to look like this - if you've a better solution, Vincenzo is happy to see it :)

```
+------------------------------------------+-----------------------------------+
| [ Enter search term here ])                           *[ clear search ]*     |
+------------------------------------------+-----------------------------------+
| Accounts:                                | Properties:                       |
*==========================================*===================================*
| *[ Little Test Account of Horrors ]*     | Property One                      |
| Horrifically Awesome Enterprises         | portal.horrific.net               |
| Beers International                      | Blistering Butterflies            |
|                                          | HamsterBBQ.net                    |
|                                          | secretsquirrel.horrific.net       |
|                                          | fonedynamics.com.au               |
+------------------------------------------------------------------------------+
```

### Component Requirements

Here's some requirements that Stevo, our junior business analyst jotted down on a dirty napkin:

* You should be able to click on various Account items and the Properties listing should update.
* You should be able to click any Property items and an alert box should be shown - i.e. "You have clicked [Account Name] - [Property Name]". Ideally, some sort of event would be emitted so that other components could listen to it.
* You should be able to enter a query into the search field which filters the Account/Property columns:
  * It searches all the Property Names within all accounts and needs to support:
    * a **single** Property Name match for a **single** Account
    * **many** Property Name matches for a **single** Account
    * **many** Property Name matches for **multiple** Accounts
  * If **no** Property Name matches occur, it should then instead search Account Names and needs to support:
    * **no** Property matches but a **single** Account match (should show all properties for that single Account)
    * **no** Property matches and **multiple** Account matches (should show all properties for the first matching Account)
  * No matches what so ever, should show "no matches" somewhere.
* There should be a "clear search" button that clears any current search.

### Example schema and data

An example of the `ClientAccount` and `ClientProperty` interfaces are provided below:

```
interface ClientAccount {
    AccountId: number;
    AccountName: string;
    Properties: ClientProperty[];
}

interface ClientProperty {
    PropertyId: number;
    Name: string;
}
```

A sample JSON file that contains some Accounts and Properties is also provided:

```
[
  {
    "AccountId": 90000,
    "AccountName": "Little Test Account of Horrors",
    "Properties": [
      { "Id": 1, "Name": "Property One" },
      { "Id": 2, "Name": "portal.horrific.net" },
      { "Id": 3, "Name": "Blistering Butterflies" },
      { "Id": 5, "Name": "HamsterBBQ.net" },
      { "Id": 8, "Name": "secretsquirrel.horrific.net" },
      { "Id": 13, "Name": "fonedynamics.com.au" }
    ]
  },
  {
    "AccountId": 1255,
    "AccountName": "Horrifically Awesome Enterprises",
    "Properties": [
      { "Id": 21, "Name": "dna-test.horrified.net" },
      { "Id": 34, "Name": "extra-secret-lab.com" },
      { "Id": 55,"Name": "55 bottles on the wall" },
      { "Id": 89, "Name": "Eighty Nine buckets of Brains" },
      { "Id": 144, "Name": "Awesome Stuff" },
      { "Id": 233, "Name": "portal.hae.global" }
    ]
  },
  {
    "AccountId": 80085,
    "AccountName": "Beers International",
    "Explicit": false,
    "Properties": [
      { "Id": 987, "Name": "Żywiec Brewery" },
      { "Id": 1597, "Name": "Leżajsk Pełne" },
      { "Id": 2584, "Name": "Karlovačka pivovara" },
      { "Id": 4181, "Name": "Diageo Guiness" }
    ]
  }
]
```

## Summary

A summary of what is required:

* A UI component that addresses the above requirements.
* Your submission should be environment agnostic.
* Any required instructions on how to run and test your submission.
* If you can't work something out, write some thoughts on how you might go about it.
* You're welcome to commit to GitHub/BitBucket or alternatively just shoot through a ZIP file with everything required.

We would love to see (but this doesn't mean you neccessarily have to use):
* ES6/Typescript
* Vue/React/other
* Webpack/Gulp
* Sass (although don't worry too much about making it perfect)
