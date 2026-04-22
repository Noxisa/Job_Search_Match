using System.Collections.Generic;

namespace JobSearchMatch.Backend.Models;

/// <summary>
/// Response returned by the skill matcher.
/// </summary>
public sealed class MatchResponse
{
    /// <summary>
    /// Match score as a percentage (0-100).
    /// </summary>
    public int MatchScore { get; set; }

    /// <summary>
    /// Skills found in both the job description and the resume.
    /// </summary>
    public IReadOnlyList<string> MatchedSkills { get; set; } = Array.Empty<string>();

    /// <summary>
    /// Skills required by the job that were not found in the resume.
    /// </summary>
    public IReadOnlyList<string> MissingSkills { get; set; } = Array.Empty<string>();
}
`
