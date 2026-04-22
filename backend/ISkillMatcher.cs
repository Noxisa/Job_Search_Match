using JobSearchMatch.Backend.Models;

namespace JobSearchMatch.Backend.Services;

public interface ISkillMatcher
{
    Task<MatchResponse> MatchAsync(MatchRequest request, CancellationToken cancellationToken = default);
}
