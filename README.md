# tf
List of [Cheaters](https://en.wikipedia.org/wiki/Cheating) in Team Fortress 2, that are actually curated by [community](https://github.com/shockpast/tf/graphs/contributors) using [Pull Requests](https://github.com/shockpast/tf/pulls) in this repository.

[tf](https://github.com/shockpast/tf) can be used as API for bots or websites, that are utilizes **.json** files *(json/cheaters.json)* for extracting data.

# Data.
**md** doesn't have is simplified version of **JSON**, it doesn't show **SteamID3** and **SteamID64**, aswell as types of cheats, that player used in report.

If you prefer to have more information about user, you might wanna see **json/cheaters.json**, otherwise see **md/cheaters.json**

## json/cheaters.json
```json
{
    // Tags are not yet supported, we don't even created an list of tags, that would fit this list.
    // "tags": ["🤝"],
    "ids": {
        "id": "STEAM_0:0:565282984",
        "id3": "U:1:1130565968",
        "id32": 1130565968,
        "id64": 76561199090831696
    },
    "username": "shockpast",
    "cheat_type": ["pSilent Aim", "BunnyHop", "ESP"]
}
```

## md/cheaters.md
| ID                                             | Name      | Type       |
| ---------------------------------------------- |-----------|------------|
| [1130565968](https://steamid.xyz/1130565968)   | shockpast | Blatant    |