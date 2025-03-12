{
"commit_conventions": {
"format": {
"structure": "type(scope): description",
"max_subject_length": 50,
"require_blank_line_after_subject": true,
"language": "french",
"context_aware": true,
"breaking_change_marker": "!",
"footer_markers": {
"breaking_changes": "BREAKING CHANGE:",
"deprecated": "DEPRECATED:",
"references": "Ref:",
"reviewed_by": "Reviewed-by:"
}
},
"validation_rules": {
"require_french_characters": true,
"reject_english_common_words": true,
"force_french_commit_verbs": true,
"dictionary": {
"add": "ajoute",
"update": "met à jour",
"fix": "corrige",
"remove": "supprime",
"refactor": "refactorise",
"improve": "améliore",
"implement": "implémente",
"optimize": "optimise",
"clean": "nettoie"
}
},
"error_messages": {
"non_french": "Le message doit être en français",
"english_words_detected": "Des mots anglais ont été détectés",
"missing_accents": "Utilisez les accents appropriés"
},
"explanation_formats": {
"require_bullet_points": true,
"bullet_point_marker": "-",
"require_bullet_on_first_sentence": true,
"force_language": "fr",
"instruction": "Les messages doivent être rédigés en français, en utilisant des verbes à l'indicatif présent. Exemple : 'feat(auth): ajoute la validation du formulaire de connexion'",
"min_french_words_ratio": 0.95,
"enforce_french_verbs": true
}
},
"types": {
"feat": "Nouvelle fonctionnalité",
"fix": "Correction de bug",
"refactor": "Refactorisation du code",
"chore": "Tâche de maintenance",
"hotfix": "Correction urgente",
"release": "Publication de version",
"update": "Mise à jour",
"dependencies": "Mise à jour des dépendances",
"performance": "Amélioration des performances",
"tests": "Modification des tests",
"documentation": "Documentation",
"style": "Modifications de style",
"ci": "Configuration CI/CD",
"revert": "Annulation d'un commit",
"security": "Correction de sécurité",
"i18n": "Internationalisation",
"a11y": "Accessibilité"
},
"components": {
"component": {
"description": "Composants Angular",
"sub_scopes": ["ui", "layout", "form", "modal", "widget", "pages", "shared"]
},
"service": {
"description": "Services Angular",
"sub_scopes": ["auth", "api", "store", "utils", "guards", "interceptors"]
},
"style": {
"description": "Styles et CSS",
"sub_scopes": ["theme", "layout", "components", "animations", "variables"]
},
"config": {
"description": "Configuration du projet",
"sub_scopes": ["build", "lint", "deploy", "i18n", "seo"]
},
"doc": {
"description": "Documentation",
"sub_scopes": ["docs"]
},
"ci_cd": {
"description": "Intégration et déploiement",
"sub_scopes": ["integration_continue"]
},
"performance": {
"description": "Performance"
},
"security": {
"description": "Sécurité"
}
}
}
