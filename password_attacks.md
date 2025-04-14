# Étapes de création d'une page PHP avec connexion MySQL + Simulation d'attaques

## Partie 1 : Création de la page PHP

1. **Démarrer XAMPP**
   - Lancer XAMPP et démarrer les services **Apache** et **MySQL**.

2. **Accéder au dossier `htdocs`**
   - Ouvrir l'explorateur de fichiers, aller dans le répertoire d'installation de XAMPP, puis dans le dossier `htdocs`.

3. **Créer un nouveau dossier de projet**
   - Nommer le dossier comme vous le souhaitez, par exemple `test_login`.
   - Ouvrir ce dossier dans **Visual Studio Code** ou bien ouvrir un terminal directement dedans.

4. **Créer un fichier `index.php`**
   - Dans le dossier, créer un fichier nommé `index.php`.

5. **Demander à ChatGPT une page PHP de connexion**
   - Exemple de ce que vous pouvez demander :  
     > "Donne-moi une page PHP qui établit une connexion avec MySQL et contient un formulaire `POST`. Elle doit retourner un code 200 si l'email et le mot de passe sont corrects. sinon retourne 401"

6. **Créer une base de données**
   - Aller sur `http://localhost/phpmyadmin`.
   - Créer une base de données, par exemple `test_db`.

7. **Créer une table `users`**
   - Dans la base `test_db`, créer une table `users` avec les colonnes :
     - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
     - `email` (VARCHAR)
     - `password` (VARCHAR)

8. **Ajouter un utilisateur**
   - Insérer manuellement un utilisateur avec un email (ex : `walid@gmail.com`) et un mot de passe (ex : `123456`).

9. **Tester la page de connexion**
   - Accéder à la page : `http://localhost/nom_du_dossier/index.php`
   - Saisir les identifiants pour tester la connexion.

10. **Modifier le fichier `index.php` si nécessaire**
    - Vérifiez que la connexion fonctionne correctement et affiche un message selon le succès ou l’échec.

---

## Partie 2 : Tester la sécurité (Linux)

11. **Passer sous Linux**
    - Ouvrir un terminal Linux.

12. **Créer un dossier de travail**
    - Par exemple :
      ```bash
      mkdir attaque_test && cd attaque_test
      ```

13. **Utiliser l’outil Hydra pour une attaque par force brute**
    - Exemple de commande :
      ```bash
      hydra -V -f -l walid@gmail.com -P passwords.txt localhost http-post-form "/nom_du_dossier/index.php:email=^USER^&password=^PASS^:F=401"
      ```
    - Hydra va essayer de trouver le mot de passe depuis la liste contenue dans `passwords.txt`.

14. **Observation**
    - Si le mot de passe figure dans `passwords.txt`, Hydra le trouvera.

---

## Partie 3 : Suivi des requêtes avec Wireshark

15. **Lancer Wireshark**
    - Ouvrir Wireshark et commencer la capture sur une interface réseau (ex: `any`).

16. **Effectuer une connexion depuis le formulaire PHP**
    - Retourner à la page de connexion et essayer de se connecter avec le formulaire.

17. **Observer les requêtes HTTP**
    - Dans Wireshark, filtrer avec `http` pour voir les requêtes envoyées (notamment le POST avec les identifiants).

---

### Conclusion

Nous avons effectué deux types d’attaques :
- Une **attaque par force brute** avec Hydra.
- Une **écoute du réseau** avec Wireshark.

Merci d’avoir suivi ces étapes avec attention.
