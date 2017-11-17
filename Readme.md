# brood

**brood** is a small Node.js based CLI application. **brood** allows you to search for algorithms and their implementations from the OpenGenus/cosmos repository. 

> Note: Since **brood** is a CLI application, I've limited the search results to just 10.


## Points to be noted:

* Brood is optimized for Mac OS system (I don't have access to a Windows or Linux at the moment :D). To follow the links, just press and hold Command key over the links and double click it.

* If you have the tapback feature enabled, Mac OS does allow you to `Quick Look` by opening a small safari window at the point of click - IMHO that's one pretty cool feature :D

## Requirements:

* Node.js

## Installation instructions:

* Download the brood.js from the `bin` directory.

* Make it executable:

```
chmod +x brood.js
```

* Symlink it to `/usr/local/bin/brood`.

* Search by specifying the search string.
For example:
```
brood dfs
```

## Sample output:

**Usage**

```bash
sidmishraw@Sidharths-MBP ~/G/j/brood-crawler> ./bin/brood.js

  Usage: brood [options]

  Search OpenGenus/cosmos from your command-line.


  Options:

    -V, --version  output the version number
    -h, --help     output usage information

    Usage Example
    ~~~~~~~~~~~

    brood [search-string]


sidmishraw@Sidharths-MBP ~/G/j/brood-crawler> 
```

**Search**
```bash
sidmishraw@Sidharths-MBP ~/G/j/brood-crawler> ./bin/brood.js bloom filter
Quick 10 Search Results:
~~~~~~~~~~~~~~~~~~~~~~~

Double click while holding "Command" key to follow the link.

  
  1. "bloom_filter.cpp" is located at "cosmos/code/data_structures/bloom_filter/bloom_filter.cpp".
  URL: https://github.com/OpenGenus/cosmos/blob/bb678bba755969715ed2e9d0199389ea29f1cfb6/code/data_structures/bloom_filter/bloom_filter.cpp

  

  
  2. "bloom_filter.c" is located at "cosmos/code/data_structures/bloom_filter/bloom_filter.c".
  URL: https://github.com/OpenGenus/cosmos/blob/bb678bba755969715ed2e9d0199389ea29f1cfb6/code/data_structures/bloom_filter/bloom_filter.c

  

  
  3. "BloomFilter.scala" is located at "cosmos/code/data_structures/bloom_filter/BloomFilter.scala".
  URL: https://github.com/OpenGenus/cosmos/blob/bb678bba755969715ed2e9d0199389ea29f1cfb6/code/data_structures/bloom_filter/BloomFilter.scala

  

  
  4. "bloom_filter.js" is located at "cosmos/code/data_structures/bloom_filter/bloom_filter.js".
  URL: https://github.com/OpenGenus/cosmos/blob/bb678bba755969715ed2e9d0199389ea29f1cfb6/code/data_structures/bloom_filter/bloom_filter.js

  

  
  5. "BloomFilter.java" is located at "cosmos/code/data_structures/bloom_filter/BloomFilter.java".
  URL: https://github.com/OpenGenus/cosmos/blob/bb678bba755969715ed2e9d0199389ea29f1cfb6/code/data_structures/bloom_filter/BloomFilter.java

  

  
  6. "bloom_filter.py" is located at "cosmos/code/data_structures/bloom_filter/bloom_filter.py".
  URL: https://github.com/OpenGenus/cosmos/blob/0c6311590566e799b432d514620f848259da2276/code/data_structures/bloom_filter/bloom_filter.py

  

  
  7. "bloom_filter.swift" is located at "cosmos/code/data_structures/bloom_filter/bloom_filter.swift".
  URL: https://github.com/OpenGenus/cosmos/blob/bb678bba755969715ed2e9d0199389ea29f1cfb6/code/data_structures/bloom_filter/bloom_filter.swift

  

  
  8. "README.md" is located at "cosmos/guides/coding_style/javascript/README.md".
  URL: https://github.com/OpenGenus/cosmos/blob/895c448b70ba3e9bafdc982b43e8cacce794a409/guides/coding_style/javascript/README.md

sidmishraw@Sidharths-MBP ~/G/j/brood-crawler> 
```


`-Sid`