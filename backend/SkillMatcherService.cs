using System.Text.RegularExpressions;
using JobSearchMatch.Backend.Models;

namespace JobSearchMatch.Backend.Services;

public sealed class SkillMatcherService : ISkillMatcher
{
    // Small seed skill list for MVP; extend or load from config/db later.
    private static readonly string[] _knownSkills = new[]
    {
        "React", "Javascript", "C#", "Dotnet", "Docker", "Kubernetes",".Net", "Dotnetcore", "Csharp", "PHP",
        "SQL", "PostgreSQL", "Azure", "AWS", "Html", "Css", "Node", "Git", "Github", "Rest", "Python", "Java"
    };

    public Task<MatchResponse> MatchAsync(MatchRequest request, CancellationToken cancellationToken = default)
    {
        var jobTokens = ExtractTokens(request.JobDescription);
        var resumeTokens = ExtractTokens(request.ResumeText);

        var required = _knownSkills.Intersect(jobTokens, StringComparer.OrdinalIgnoreCase)
                                  .Distinct(StringComparer.OrdinalIgnoreCase)
                                  .ToList();

        var matched = required.Intersect(resumeTokens, StringComparer.OrdinalIgnoreCase)
                              .Distinct(StringComparer.OrdinalIgnoreCase)
                              .ToList();

        var missing = required.Except(matched, StringComparer.OrdinalIgnoreCase)
                              .ToList();

        var score = required.Count == 0 ? 0 : (int)Math.Round((double)matched.Count / required.Count * 100);

        var response = new MatchResponse
        {
            MatchScore = score,
            MatchedSkills = matched,
            MissingSkills = missing
        };

        return Task.FromResult(response);
    }

    private static IEnumerable<string> ExtractTokens(string text)
    {
        if (string.IsNullOrWhiteSpace(text))
        {
            return Array.Empty<string>();
        }

        var lower = text.ToLowerInvariant();

        // Replace punctuation with spaces but keep # and + for languages like c# and c++
        var cleaned = Regex.Replace(lower, @"[^\w#\+]", " ");
        var tokens = cleaned.Split(new[] { ' ', '\t', '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);

        var normalized = tokens.Select(t =>
        {
            if (t == ".net" || t == "dotnetcore") return "dotnet";
            if (t == "csharp") return "c#";
            return t.Trim();
        });

        return normalized;
    }
}
