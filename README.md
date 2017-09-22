# Trainologic Code Task #
This task was given to me as a practical AngularJs exam.

Together with the solution I will included a showcase of a suitable architecture.

## The Task ##
Below is a tree of contacts and groups. A contact has an id and a name. A group represents a collection of groups and contacts. id is unique across the whole tree

```javascript 1.8
var contacts = [
    {
        id:1,
        name: "Friends",
        type: "Group",
        contacts: [
            {id:2, name: "Udi", type: "Contact"},
            {id:3, name: "Tommy", type: "Contact"},
            {
                id:6,
                name: "Old Friends",
                type: "Group",
                contacts: [
                    {id:7, name: "Itay", type: "Contact"},
                ]
            },
        ]
    },
    {
        id:4,
        name: "Family",
        type: "Group",
        contacts: [
            {id:5, name: "Roni", type: "Contact"},
        ]
    },
    {id: 8, name: "Ori", type: "Contact"},
];
```
Your task is to create an angular 1 application which displays a tree of contacts and allow the end user to expand each group and see its children items

For example, when running the application all groups are collapsed

![](https://user-images.githubusercontent.com/18151275/30758500-56cfc7f8-9fdb-11e7-8385-4283df208945.png)

Once the end user clicks the “Friends” group it is expanded as below

![](https://user-images.githubusercontent.com/18151275/30758501-56d1019a-9fdb-11e7-9a49-aa8ae5a6918d.png)

The user can expand any group. This time is the “Old Friends” group

![](https://user-images.githubusercontent.com/18151275/30758499-56cc373c-9fdb-11e7-9c01-8a0193ab7d15.png)

An expanded group can be collapsed by clicking it again

![](https://user-images.githubusercontent.com/18151275/30758502-56d1b0b8-9fdb-11e7-9c1a-17aa18cbb06a.png)

A group that is collapsed should not incur any overhead (DOM and angular). That means that a collapsed group’s children are not part of the DOM and are created/destroyed per user click

You should implement the same look & feel (CSS) as described by the screen shots above