namespace JobSearchMatch.Backend.Models;

/// <summary>
/// Request payload for skill matching.
/// </summary>
public sealed class MatchRequest
{
    /// <summary>
    /// Resume text to analyze.
    /// </summary>
    public string ResumeText { get; set; } = string.Empty;

    /// <summary>
    /// Job description to compare against.
    /// </summary>
    public string JobDescription { get; set; } = string.Empty;
}
