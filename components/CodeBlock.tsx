"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  enableSyntaxHighlight?: boolean;
}

export default function CodeBlock({
  code,
  language,
  enableSyntaxHighlight = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erreur lors de la copie:", err);
    }
  };

  return (
    <div className="code-block group relative overflow-hidden">
      {/* Header avec contraste amélioré */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-80"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full opacity-80"></div>
          </div>
          <span className="text-gray-300 text-sm font-mono font-semibold bg-gray-800/50 px-3 py-1 rounded-full">
            {language.toUpperCase()}
          </span>
        </div>

        <button
          onClick={copyToClipboard}
          className={`
            relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm
            transition-all duration-200 border border-gray-600
            ${
              copied
                ? "bg-green-600 text-white border-green-500"
                : "bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white hover:border-gray-500"
            }
          `}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Copié !</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copier</span>
            </>
          )}
        </button>
      </div>

      {/* Code avec syntaxe améliorée */}
      <div className="relative">
        <pre className="text-gray-100 overflow-x-auto font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <code className="block">
            {enableSyntaxHighlight ? (
              <SyntaxHighlight code={code} language={language} />
            ) : (
              <span className="text-green-400">{code}</span>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Composant simple de coloration syntaxique
function SyntaxHighlight({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  if (language === "cpp" || language === "c" || language === "arduino") {
    return (
      <span>
        {code.split("\n").map((line, index) => (
          <span key={index} className="block">
            {highlightCppLine(line)}
            {index < code.split("\n").length - 1 && "\n"}
          </span>
        ))}
      </span>
    );
  }

  return <span className="text-green-400">{code}</span>;
}

function highlightCppLine(line: string) {
  // Échapper le HTML pour éviter les conflits
  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  // Nettoyer la ligne d'abord
  let result = escapeHtml(line.trim());

  // Si la ligne est vide, retourner directement
  if (!result) {
    return <span>{line}</span>;
  }

  // Définir les patterns avec des priorités
  const patterns = [
    // Préprocesseur (priorité 1)
    {
      regex: /^#\w+.*$/g,
      className: "text-purple-400",
    },
    // Commentaires (priorité 2)
    {
      regex: /\/\/.*$/g,
      className: "text-gray-500",
    },
    {
      regex: /\/\*[\s\S]*?\*\//g,
      className: "text-gray-500",
    },
    // Chaînes de caractères (priorité 3)
    {
      regex: /"[^"]*"/g,
      className: "text-yellow-400",
    },
    {
      regex: /'[^']*'/g,
      className: "text-yellow-400",
    },
    // Mots-clés Arduino/C++ (priorité 4)
    {
      regex:
        /\b(void|int|float|char|bool|if|else|for|while|return|include|define|setup|loop|pinMode|digitalWrite|digitalRead|analogRead|analogWrite|Serial|delay|const|HIGH|LOW)\b/g,
      className: "text-blue-400",
    },
    // Nombres (priorité 5)
    {
      regex: /\b\d+(\.\d+)?\b/g,
      className: "text-orange-400",
    },
  ];

  // Appliquer les colorations une par une
  patterns.forEach((pattern) => {
    result = result.replace(pattern.regex, (match) => {
      return `<span class="${pattern.className}">${match}</span>`;
    });
  });

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}
