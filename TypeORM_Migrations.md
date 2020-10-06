### Migrations (to sync the database in production)

* Set up configuration
```
    $ touch ormconfig.js
```
* Build the code
```
    $ yarn build
```
* Option 1: Create a new migration
```
    $ npx typeorm migration:create -n <name>
```  
E.g. CoffeeRefactor

* Option 2: Let TypeORM create the migration
```
    $ npx typeorm migration:generate -n <name>
```
E.g. SchemaSync

* Run migrations
```
    $ npx typeorm migration:run
```

* Rollback
```
    $ npx typeorm migration:revert
```